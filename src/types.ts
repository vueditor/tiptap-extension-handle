import type { PluginKey } from '@tiptap/pm/state'
import type { EditorView } from '@tiptap/pm/view'

export interface HandleOptions {
  handleId: string
  handleBarId: string
}

export type HandlePluginOptions = HandleOptions

export interface HandleState {
  // editor left & right x pos
  minX: number
  maxX: number

  // mouse coordinate
  x: number | null
  y: number | null

  // pos for current target node
  pos: number | null
}

export type HandleViewOptions = HandlePluginOptions & {
  editorView: EditorView
  handlePluginKey: PluginKey
}
