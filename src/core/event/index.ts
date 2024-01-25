import { CanvasClickEvent } from './click'

export class CanvasEvent {
  clickEvent: CanvasClickEvent

  constructor(canvas: fabric.Canvas) {
    this.clickEvent = new CanvasClickEvent(canvas)
  }
}
