import * as fs from 'fs-extra';
import { resolve } from 'path';
import { generateIndexContent } from './generateIndexContent';
import * as filters from './filters';
import { config } from './util'

export async function writeIndexFile(targetFolder: string) {
  const files = await fs.readdir(targetFolder);

  const indexFilePath = resolve(targetFolder, `index.${config.outputFileType}`);
  const indexContent = generateIndexContent(files, [
    filters.isCodeFileOrDirectory,
    filters.isNotTestFile,
    filters.isNotLanguageHelperFile,
    filters.isNotIndexFile,
  ]);

  await fs.writeFile(indexFilePath, indexContent);
}
