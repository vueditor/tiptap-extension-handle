<script lang="ts" setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { handle } from '../../../..'

const editor = useEditor({
  content: '<p>@vueditor/tiptap-extension-handle</p>',
  extensions: [
    StarterKit,
    handle
  ],
})
</script>

<template>
  <div class="editor">
    <EditorContent :editor="editor" />
  </div>
</template>

<style lang="scss">
.editor {
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

  .tiptap {
    padding: 24px 64px;

    &:focus-visible {
      outline: none;
    }
  }
}
</style>