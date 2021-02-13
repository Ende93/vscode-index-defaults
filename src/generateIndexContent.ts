import { config, getFileName } from './util';

type FileFilter = (file: string) => boolean;

export function generateIndexContent(
  files: string[],
  filters: FileFilter[],
) {
  const exportedFiles = filters.reduce((f, filter) => {
    return f.filter(filter);
  }, files);

  const exportLines = exportedFiles.map(file => {
    const fileName = getFileName(file);

    return `export { default as ${fileName} } from ${config.quote}./${file}${config.quote};`;
  });

  return exportLines.join('\n');
}
