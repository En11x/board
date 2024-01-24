import { defineStore } from 'pinia'
import { useDark } from '@/composables/useDark'
import { BOARD_COLORS, BOARD_COLORS_DARK } from '@/constants/index'
import { board } from '@/core/board'

interface IDraw {
  color: string
  drawWidth: number
}

const isDark = useDark()

export const useDrawStore = defineStore({
  id: 'draw',
  state: (): IDraw => ({
    color: isDark ? BOARD_COLORS_DARK[0] : BOARD_COLORS[0],
    drawWidth: 5,
  }),
  getters: {
    getDrawWidth: state => state.drawWidth,
  },
  actions: {
    setColor(color: string) {
      this.color = color
      board.setPencil()
    },
    setWidth(width: number) {
      this.drawWidth = width
      board.setPencil()
      board.setEraser()
    },
  },
})
