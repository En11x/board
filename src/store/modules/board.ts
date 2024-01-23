import { defineStore } from 'pinia'
import { BoardMode } from '@/constants'
import { board } from '@/utils/board'

interface BoardState {
  mode: BoardMode
}

export const useBoardStore = defineStore({
  id: 'board',
  state: (): BoardState => ({
    mode: BoardMode.SELECT,
  }),
  getters: {},
  actions: {
    toggleMode(mode: BoardMode) {
      this.mode = mode
      board.initMode()
    },
  },
})
