const replaceOrRemoveReactImport = (snippetBody: string[]) => {
  const reactImportIndex = snippetBody.findIndex((line) =>
    line.match(new RegExp(/import React/, 'g')),
  );

  if (reactImportIndex !== -1) {
    const line = snippetBody[reactImportIndex];
    snippetBody[reactImportIndex] = line
      .replace(new RegExp(/^import React .*$/, 'g'), '')
      .replace(new RegExp(/^import React, /, 'g'), 'import ');
  }

  return snippetBody.join('\n');
};

export default replaceOrRemoveReactImport;
