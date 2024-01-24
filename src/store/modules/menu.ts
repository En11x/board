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
  actions: {
    toggleDarkMode() {
      isDark.value = !isDark.value
    },
  },
})
