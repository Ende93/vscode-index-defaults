import * as fsExtra from 'fs-extra';
import { resolve } from 'path';
import { generateIndexContent } from './generateIndexContent';
import * as filters from './filters';

export async function writeIndexFile(
  targetFolder: string,
  fileType = 'js',
  fs = fsExtra,
) {
  const files = await fs.readdir(targetFolder);

  const indexFilePath = resolve(targetFolder, 'index.' + fileType);
  const indexContent = generateIndexContent(files, [
    filters.isCodeFileOrDirectory,
    filters.isNotTestFile,
    filters.isNotLanguageHelperFile,
    filters.isNotIndexFile,
  ]);

  await fs.writeFile(indexFilePath, indexContent);
}
