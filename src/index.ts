import { getStyle } from '@/style'
import { createStyleTag, Extension } from '@tiptap/core'
import type { HandleOptions } from '@/types'
import { handlePlugin } from './handle'

export const handle = Extension.create<Partial<HandleOptions>>({
  name: 'handle',
  addOptions() {
    return {
      handleId: 'vueditor-handle',
      handleBarId: 'vueditor-handle-bar',
    }
  },
  addProseMirrorPlugins() {
    return [
      handlePlugin({
        handleId: this.options.handleId!,
        handleBarId: this.options.handleBarId!,
      }),
    ]
  },
  onBeforeCreate() {
    if (document.getElementById(this.options.handleId!)) {
      return
    }

    const handleElement = document.createElement('div')
    handleElement.setAttribute('id', this.options.handleId!)
    handleElement.setAttribute('date-vueditor', 'true')

    const handleBarElement = document.createElement('div')
    handleBarElement.setAttribute('id', this.options.handleBarId!)
    handleBarElement.classList.add('icon-park-outline--drag')
    handleBarElement.setAttribute('draggable', 'true')

    handleElement.appendChild(handleBarElement)
    createStyleTag(getStyle(this.options.handleId!, this.options.handleBarId!), undefined, this.options.handleId)
    document.body.appendChild(handleElement)
  },
  onDestroy() {
    // disable in development, for StrictMode in React dev
    if (!import.meta.env.PROD) {
      return
    }

    const handleElement = document.getElementById(this.options.handleId!)

    if (handleElement?.getAttribute('date-vueditor') === 'true') {
      handleElement.remove()
    }
  },
})
