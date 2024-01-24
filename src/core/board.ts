import { fabric } from 'fabric'
import 'fabric/src/mixins/eraser_brush.mixin'

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
      this.initPencil()
    }

    if(mode === BOARD_MODE.ERASER){
      this.initEraser()
    }

    fabric.Object.prototype.set({
      selectable,
    })
  }

  initPencil() {
    if (!this.canvas)
      return

    const pencilBrush = new fabric.PencilBrush(this.canvas)
    this.canvas.isDrawingMode = true
    this.canvas.freeDrawingBrush = pencilBrush
    this.canvas.freeDrawingBrush.width = useDrawStore().drawWidth
    this.setPencil()
  }

  setPencil() {
    if (!this.canvas)
      return

    const draw = useDrawStore()
    this.canvas.freeDrawingBrush.color = draw.color
    this.canvas.freeDrawingBrush.width = draw.drawWidth
  }

  initEraser(){
    if(!this.canvas){
      return
    }

    const eraserBrush = new (fabric as any).EraserBrush(this.canvas)
    this.canvas.isDrawingMode = true
    this.canvas.freeDrawingBrush = eraserBrush
    this.setEraser()
  }

  setEraser(){
    this.canvas!.freeDrawingBrush.width = useDrawStore().drawWidth
  }
}

export const board = new Board()
