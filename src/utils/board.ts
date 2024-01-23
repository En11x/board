import { fabric } from 'fabric'

class Board {
  canvas: fabric.Canvas | null = null

  constructor() {

  }

  init(canvasEl: HTMLCanvasElement) {
    this.canvas = new fabric.Canvas(canvasEl, {
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }
}

export const board = new Board()
