import type { IEvent } from 'fabric/fabric-impl'
import { BOARD_MODE } from '@/constants'
import { useBoardStore } from '@/store/modules/board'

export class CanvasClickEvent {
  isDragging: boolean = false
  lastX: number = 0
  lastY: number = 0

  constructor(canvas: fabric.Canvas) {
    this.init(canvas)
  }

  init(canvas: fabric.Canvas) {
    canvas.on('mouse:down', ({ e }: IEvent<MouseEvent>) => {
      const mode = useBoardStore().mode
      if (mode === BOARD_MODE.HAND) {
        this.isDragging = true
        this.lastX = e.clientX
        this.lastY = e.clientY
      }
      else {
        this.isDragging = false
      }
    })

    canvas.on('mouse:move', ({ e }: IEvent<MouseEvent>) => {
      if (this.isDragging) {
        const deltaX = e.clientX - this.lastX
        const deltaY = e.clientY - this.lastY
        canvas.relativePan({ x: deltaX, y: deltaY })
        this.lastX = e.clientX
        this.lastY = e.clientY
      }
    })

    canvas.on('mouse:up', () => {
      this.isDragging = false
    })
  }
}
