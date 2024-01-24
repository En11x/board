import { fabric } from 'fabric'
import { BOARD_MODE } from '@/constants'
import { useBoardStore } from '@/store/modules/board'
import { useDrawStore } from '@/store/modules/draw'

class Board {
  canvas: fabric.Canvas | null = null

  constructor() {}

  init(canvasEl: HTMLCanvasElement) {
    this.canvas = new fabric.Canvas(canvasEl, {
      width: window.innerWidth,
      height: window.innerHeight,
    })

    this.setMode()
  }

  setMode() {
    if (!this.canvas)
      return
    let selectable = false
    const mode = useBoardStore().mode
    if (mode === BOARD_MODE.SELECT) {
      this.canvas.isDrawingMode = false
      selectable = true
    }

    if (mode === BOARD_MODE.DRAW) {
      selectable = false
      this.setPencilBrush()
    }

    fabric.Object.prototype.set({
      selectable,
    })
  }

  setPencilBrush() {
    if (!this.canvas)
      return

    const pencilBrush = new fabric.PencilBrush(this.canvas)
    this.canvas.isDrawingMode = true
    this.canvas.freeDrawingBrush = pencilBrush
    this.setPencilColor()
  }

  setPencilColor(color: string = useDrawStore().color) {
    if (!this.canvas)
      return

    this.canvas.freeDrawingBrush.color = color
  }
}

export const board = new Board()
