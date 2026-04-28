import { env, ExtensionContext, Uri, window } from 'vscode';

const FIRST_SHOWN_KEY = 'r5n.migrated.firstShownAt';
const DISMISSED_KEY = 'r5n.migrated.dismissed';
const NEW_EXTENSION_ID = 'r5n.es-js-snippets';
const REMINDER_AFTER_MS = 7 * 24 * 60 * 60 * 1000;

const INITIAL_MESSAGE =
  'ES7+ React/Redux/React-Native snippets has moved. Install the new version (r5n.es-js-snippets) for React 17–19 support and ongoing updates.';

const FINAL_MESSAGE =
  'Final reminder: this extension has moved to r5n.es-js-snippets and is no longer maintained here.';

export async function showMigrationNotice(
  context: ExtensionContext,
): Promise<void> {
  if (context.globalState.get(DISMISSED_KEY) === true) return;

  const now = Date.now();
  const firstShownAt = context.globalState.get<number>(FIRST_SHOWN_KEY);

  if (firstShownAt === undefined) {
    await context.globalState.update(FIRST_SHOWN_KEY, now);
    await showToast(context, INITIAL_MESSAGE, false);
    return;
  }

  if (now - firstShownAt >= REMINDER_AFTER_MS) {
    await showToast(context, FINAL_MESSAGE, true);
    await context.globalState.update(DISMISSED_KEY, true);
  }
}

async function showToast(
  context: ExtensionContext,
  message: string,
  finalNudge: boolean,
): Promise<void> {
  const action = await window.showInformationMessage(
    message,
    'Install new version',
    "Don't show again",
  );

  if (action === 'Install new version') {
    await env.openExternal(Uri.parse(`vscode:extension/${NEW_EXTENSION_ID}`));
    await context.globalState.update(DISMISSED_KEY, true);
    return;
  }

  if (action === "Don't show again" || finalNudge) {
    await context.globalState.update(DISMISSED_KEY, true);
  }
}
