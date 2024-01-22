import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { useDark } from '@/composables/index'

interface MenuState {
  darkMode: Ref<boolean>
}

const isDark = useDark()

export const useMenuStore = defineStore({
  id: 'menu',
  state: (): MenuState => ({
    darkMode: isDark,
  }),
  getters: {
    getDarkMode(): boolean {
      return this.darkMode
    },
  },
  actions: {
    toggleDarkMode() {
      isDark.value = !isDark.value
    },
  },
})
