# index-defaults

Generates an index file within a source code directory that simply re-exports all default exports of adjacent modules as named exports.

## Features

Right click a directory in the Explorer and select "Index default exports in this directory".

An `index.js` file will be created in that directory which re-exports default exports from all files and directories within the directory you specified.

For instance, if your structure looks like this:

```
code
|
+- Foo/
+- bar.js
+- baz.tsx
```

The extension will create a file `code/index.js` with the following content:

```js
export { default as Foo } from './Foo';
export { default as bar } from './bar';
export { default as baz } from './baz';
```

## Extension Settings

1. Open vscode setting
2. search `index-defaults`
3. change `fileTypes` ...config

## Release Notes

Users appreciate release notes as you update your extension.

### 0.0.1

Initial, minimal working feature. JS index file only. Some non-configurable sane filters.
