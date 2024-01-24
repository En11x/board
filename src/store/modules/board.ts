import { defineStore } from 'pinia'
import { BOARD_MODE } from '@/constants'
import { board } from '@/core/board'

interface BoardState {
  mode: BOARD_MODE
}

export const useBoardStore = defineStore({
  id: 'board',
  state: (): BoardState => ({
    mode: BOARD_MODE.SELECT,
  }),
  getters: {},
  actions: {
    toggleMode(mode: BOARD_MODE) {
      this.mode = mode
      board.setMode()
    },
  },
})
