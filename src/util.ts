export function getFileName(file: string) {
  return file.replace(/\.[^\.]+$/, '');
}

export function getFileType(file: string) {
  if (!file.includes('.')) {
    return '';
  }
  return file.split('.').pop() || '';
}
