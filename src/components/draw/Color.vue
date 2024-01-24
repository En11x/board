<script setup lang="ts">
import { toRefs } from 'vue'
import { BOARD_COLORS, BOARD_COLORS_DARK } from '@/constants'
import { useMenuStore } from '@/store/modules/menu'
import { useDrawStore } from '@/store/modules/draw'

const { darkMode } = toRefs(useMenuStore())
const { color, setColor } = toRefs(useDrawStore())
</script>

<template>
  <div pa-1 grid-cols-4>
    <button
      v-for="c in darkMode ? BOARD_COLORS_DARK : BOARD_COLORS"

      :key="c" ma-0 f-c-c pa-0
      btn-square
      :class="`${c === color ? 'bg-hover dark:bg-hover-dark' : ''}`"
      @click="setColor(c)"
    >
      <span
        circle
        :style="{ backgroundColor: c }"
      />
    </button>
  </div>
</template>
