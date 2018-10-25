import * as assert from 'assert';
import * as filters from '../filters';

suite('Filter Tests', () => {
  test('isCodeFileOrDirectory', () => {
    assert.deepEqual(
      [
        'foo.js',
        'foo.md',
        'foo.ts',
        'foo.tsx',
        'foo.txt',
        'foo.jsx',
        'foo',
      ].filter(filters.isCodeFileOrDirectory),
      ['foo.js', 'foo.ts', 'foo.tsx', 'foo.jsx', 'foo'],
    );
  });

  test('isNotTestFile', () => {
    assert.deepEqual(
      [
        'foo.js',
        'foo.spec.js',
        'foo.test.js',
        'foo',
        '__tests__',
        '__spec__',
      ].filter(filters.isNotTestFile),
      ['foo.js', 'foo'],
    );
  });

  test('isNotLanguageHelperFile', () => {
    assert.deepEqual(
      ['foo.js', 'foo.d.ts'].filter(filters.isNotLanguageHelperFile),
      ['foo.js'],
    );
  });

  test('isNotIndexFile', () => {
    assert.deepEqual(
      ['foo.js', 'index.js', 'index.ts', 'foo.ts'].filter(
        filters.isNotIndexFile,
      ),
      ['foo.js', 'foo.ts'],
    );
  });
});
