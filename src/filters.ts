import * as fs from 'fs-extra';
import { config, getFileName, getFileType } from './util';

const SUPPORTED_FILE_TYPES = typeof config.fileTypes === 'string' ? config.fileTypes.replace(/\s/g, '').split(',') : ['js', 'ts', 'tsx', 'jsx'];
const TEST_FILE_PATTERNS = ['.test.', '.spec.', '__test__', '__spec__'];
const LANGUAGE_HELPER_FILE_PATTERNS = ['.d.ts'];

export const isCodeFile = (file: string) =>
  SUPPORTED_FILE_TYPES.some(type => type === getFileType(file) || getFileType(file) === '');

export const isDirectory = (file: string) => fs.lstat(file).then(stat => stat.isDirectory());

export const isNotTestFile = (file: string) =>
  !TEST_FILE_PATTERNS.some(pattern => file.includes(pattern));

export const isNotLanguageHelperFile = (file: string) =>
  !LANGUAGE_HELPER_FILE_PATTERNS.some(pattern => file.includes(pattern));

export const isNotIndexFile = (file: string) => getFileName(file) !== 'index';
