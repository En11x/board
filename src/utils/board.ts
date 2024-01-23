import { fabric } from 'fabric'
import { BoardMode } from '@/constants'
import { useBoardStore } from '@/store/modules/board'

class Board {
  canvas: fabric.Canvas | null = null

  constructor() {}

  init(canvasEl: HTMLCanvasElement) {
    this.canvas = new fabric.Canvas(canvasEl, {
      width: window.innerWidth,
      height: window.innerHeight,
    })

    this.initMode()
  }

  initMode() {
    if (!this.canvas)
      return
    const mode = useBoardStore().mode
    let isDrawingMode = false
    const objectSet: Partial<fabric.IObjectOptions> = {
      selectable: false,
    }
    if (mode === BoardMode.SELECT)
      objectSet.selectable = true

    if (mode === BoardMode.DRAW) {
      isDrawingMode = true
      objectSet.selectable = false
    }
    this.canvas.isDrawingMode = isDrawingMode
    fabric.Object.prototype.set(objectSet)
  }
}

export const board = new Board()
