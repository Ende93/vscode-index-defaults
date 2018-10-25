import { getFileName, getFileType } from './util';

const SUPPORTED_FILE_TYPES: string[] = ['js', 'ts', 'tsx', 'jsx', ''];
const TEST_FILE_PATTERNS = ['.test.', '.spec.', '__test__', '__spec__'];
const LANGUAGE_HELPER_FILE_PATTERNS = ['.d.ts'];

export const isCodeFileOrDirectory = (file: string) =>
  SUPPORTED_FILE_TYPES.some(type => type === getFileType(file));

export const isNotTestFile = (file: string) =>
  !TEST_FILE_PATTERNS.some(pattern => file.includes(pattern));

export const isNotLanguageHelperFile = (file: string) =>
  !LANGUAGE_HELPER_FILE_PATTERNS.some(pattern => file.includes(pattern));

export const isNotIndexFile = (file: string) => getFileName(file) !== 'index';
