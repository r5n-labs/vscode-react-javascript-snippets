import {
  commands,
  env,
  ExtensionContext,
  extensions,
  Uri,
  window,
} from 'vscode';

const LAST_SHOWN_KEY = 'r5n.migrated.lastShownAt';
const DISMISSED_KEY = 'r5n.migrated.dismissed';
const NEW_EXTENSION_ID = 'r5n.es-js-snippets';
const OLD_EXTENSION_ID = 'dsznajder.es7-react-js-snippets';
const REMINDER_AFTER_MS = 7 * 24 * 60 * 60 * 1000;
const MIGRATE_ACTION = 'Migrate to new extension';
const DISMISS_ACTION = "Don't show again";
const RELOAD_ACTION = 'Reload Window';

const INITIAL_MESSAGE =
  'ES7+ React/Redux/React-Native snippets has moved. Install the new version (r5n.es-js-snippets) for React 17–19 support and ongoing updates.';

const REMINDER_MESSAGE =
  'Reminder: this extension has moved to r5n.es-js-snippets and is no longer maintained here.';

const FINISH_MESSAGE =
  'The new r5n.es-js-snippets extension is installed. Finish migration by uninstalling this deprecated extension.';

export async function showMigrationNotice(
  context: ExtensionContext,
): Promise<void> {
  if (context.globalState.get(DISMISSED_KEY) === true) return;

  const now = Date.now();
  const lastShownAt = context.globalState.get<number>(LAST_SHOWN_KEY);

  if (lastShownAt !== undefined && now - lastShownAt < REMINDER_AFTER_MS) {
    return;
  }

  await context.globalState.update(LAST_SHOWN_KEY, now);
  await showToast(
    context,
    extensions.getExtension(NEW_EXTENSION_ID) !== undefined
      ? FINISH_MESSAGE
      : lastShownAt === undefined
        ? INITIAL_MESSAGE
        : REMINDER_MESSAGE,
  );
}

async function showToast(
  context: ExtensionContext,
  message: string,
): Promise<void> {
  const action = await window.showInformationMessage(
    message,
    MIGRATE_ACTION,
    DISMISS_ACTION,
  );

  if (action === MIGRATE_ACTION) {
    await migrateToNewExtension();
    return;
  }

  if (action === DISMISS_ACTION) {
    await context.globalState.update(DISMISSED_KEY, true);
  }
}

async function migrateToNewExtension(): Promise<void> {
  try {
    if (extensions.getExtension(NEW_EXTENSION_ID) === undefined) {
      await commands.executeCommand(
        'workbench.extensions.installExtension',
        NEW_EXTENSION_ID,
        { enable: true },
      );
    }

    await commands.executeCommand(
      'workbench.extensions.uninstallExtension',
      OLD_EXTENSION_ID,
    );

    const action = await window.showInformationMessage(
      'Migration started. Reload VS Code to finish removing this deprecated extension.',
      RELOAD_ACTION,
    );

    if (action === RELOAD_ACTION) {
      await commands.executeCommand('workbench.action.reloadWindow');
    }
  } catch {
    await env.openExternal(Uri.parse(`vscode:extension/${NEW_EXTENSION_ID}`));
    await window.showWarningMessage(
      'Automatic migration failed. Install r5n.es-js-snippets from the opened extension page, then uninstall this deprecated extension.',
    );
  }
}
