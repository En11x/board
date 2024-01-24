import { defineStore } from 'pinia'
import { useDark } from '@/composables/useDark'
import { BOARD_COLORS, BOARD_COLORS_DARK } from '@/constants/index'
import { board } from '@/utils/board'

interface IDraw {
  color: string
}

const isDark = useDark()

export const useDrawStore = defineStore({
  id: 'draw',
  state: (): IDraw => ({
    color: isDark ? BOARD_COLORS_DARK[0] : BOARD_COLORS[0],
  }),
  actions: {
    setColor(color: string) {
      this.color = color
      board.setPencilColor(color)
    },
  },
})
