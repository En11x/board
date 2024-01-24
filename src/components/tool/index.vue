<script setup lang="ts">
import { toRefs } from 'vue'
import type { BOARD_MODE } from '@/constants'
import { useBoardStore } from '@/store/modules/board'

const { mode, toggleMode } = toRefs(useBoardStore())
const tools: Record<BOARD_MODE, string> = {
  select: 'i-carbon-cursor-1',
  hand: 'i-radix-icons:hand',
  draw: 'i-radix-icons:pencil-1',
  eraser: 'i-radix-icons:eraser',
}
</script>

<template>
  <div fixed bottom-10 w-full f-c-c>
    <div f-c-c pa-1 panel>
      <button
        v-for="[key, icon] in Object.entries(tools)" :key="key" f-c-c btn-square
        :class="`${mode === key ? 'bg-active color-white dark:hover:bg-active hover:bg-active' : ''}`"
        @click="toggleMode(key as BOARD_MODE)"
      >
        <i :class="`${icon}`" i-md />
      </button>
    </div>
  </div>
</template>
