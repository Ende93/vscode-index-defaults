import * as fs from 'fs-extra';
import { resolve } from 'path';
import { generateIndexContent } from './generateIndexContent';
import * as filters from './filters';
import { config } from './util'

export async function writeIndexFile(targetFolder: string) {
  const files = await fs.readdir(targetFolder);

  const indexFilePath = resolve(targetFolder, `index.${config.outputFileType}`);
  const indexContent = generateIndexContent(files, [
    filters.isCodeFile,
    filters.isNotTestFile,
    filters.isNotLanguageHelperFile,
    filters.isNotIndexFile,
  ]);
  if (config.recurion) {
    const dirs = await Promise.all(
      files.map(file => resolve(targetFolder, file))
        .map(async file => {
          const isDir = await filters.isDirectory(file)

          return isDir ? file : null;
        })
    )
    await Promise.all(
      dirs.filter((t): t is string => !!t)
        .map(writeIndexFile)
    );
  }

  await fs.writeFile(indexFilePath, indexContent);
}
