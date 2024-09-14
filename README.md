# Tiptap extension handle

![GitHub License](https://img.shields.io/github/license/vueditor/tiptap-extension-handle?style=plastic) ![NPM Version](https://img.shields.io/npm/v/%40vueditor%2Ftiptap-extension-handle?style=plastic) ![NPM Downloads](https://img.shields.io/npm/dm/%40vueditor%2Ftiptap-extension-handle?style=plastic)  ![GitHub Repo stars](https://img.shields.io/github/stars/vueditor/tiptap-extension-handle?style=plastic)

A tiptap extension to support drag handle

## Installation

```bash
pnpm add @vueditor/tiptap-extension-handle
```

or

```bash
npm install @vueditor/tiptap-extension-handle
```

## Basic usage

> [!TIP]
> For more detailed usage，see the [examples](./examples/) directory or more comprehensive usage: [rich text editor](https://github.com/vueditor/rich-text-editor.git).

```ts
import { Editor } from '@tiptap/core'
import { handle } from '@vueditor/tiptap-extension-handle'

const editor = new Editor({
  extension: [handle]
})
```
