import { getFileName } from './util';

type FileFilter = (file: string) => boolean;

export function generateIndexContent(
  files: string[],
  filters: FileFilter[],
  quoteChar: string = "'",
) {
  const exportedFiles = filters.reduce((f, filter) => {
    return f.filter(filter);
  }, files);

  const exportLines = exportedFiles.map(file => {
    const fileName = getFileName(file);
    return `export { default as ${fileName} } from ${quoteChar}./${fileName}${quoteChar};`;
  });

  return exportLines.join('\n');
}
