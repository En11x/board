import { defineStore } from 'pinia'
import { useDark } from '@/composables/index'

interface BoardState {
  darkMode: boolean
}

const isDark = useDark()

export const useBoardStore = defineStore({
  id: 'board',
  state: (): BoardState => ({
    darkMode: isDark.value,
  }),
  getters: {
    getDarkMode(): boolean {
      return this.darkMode
    },
  },
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    },
  },
})
