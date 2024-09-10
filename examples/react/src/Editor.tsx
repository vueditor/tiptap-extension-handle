import { EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { handle } from '../../..'
import './Editor.scss'

// define your extension array
const extensions = [StarterKit, handle.configure({
  handleId: 'react-handle',
  handleBarId: 'react-bar-handle',
})]
const content = '@vueditor/tiptap-extension-handle'

export default function Editor() {
  return (
    <div className="editor">
      <EditorProvider extensions={extensions} content={content}>

      </EditorProvider>
    </div>
  )
}
