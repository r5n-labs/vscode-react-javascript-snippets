const DEFAULT_REACT_IMPORT = /^\s*import React from (['"])react\1;?\s*$/;
const NAMED_REACT_IMPORT =
  /^(\s*)import React,\s*(\{[^}]+\})\s+from\s+(['"])react\3;?\s*$/;

export const replaceOrRemoveReactImport = (body: string[]): string[] => {
  const reactImportIndex = body.findIndex(
    (line) => DEFAULT_REACT_IMPORT.test(line) || NAMED_REACT_IMPORT.test(line),
  );

  if (reactImportIndex === -1) return [...body];

  const bodyCopy = [...body];
  const line = bodyCopy[reactImportIndex];
  const namedImport = NAMED_REACT_IMPORT.exec(line);

  if (namedImport) {
    const [, indentation, imports, quote] = namedImport;
    const semicolon = line.trimEnd().endsWith(';') ? ';' : '';
    bodyCopy[reactImportIndex] =
      `${indentation}import ${imports} from ${quote}react${quote}${semicolon}`;
    return bodyCopy;
  }

  bodyCopy.splice(reactImportIndex, 1);
  if (body[reactImportIndex + 1] === '') {
    bodyCopy.splice(reactImportIndex, 1);
  } else if (body[reactImportIndex - 1] === '') {
    bodyCopy.splice(reactImportIndex - 1, 1);
  }

  return bodyCopy;
};

export default replaceOrRemoveReactImport;
