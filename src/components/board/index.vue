<script setup lang="ts">
import { onMounted, ref, toRefs } from 'vue'
import { board } from '@/utils/board'
import { useBoardStore } from '@/store/modules/board'

const canvasRef = ref<HTMLCanvasElement>()
const { mode } = toRefs(useBoardStore())

onMounted(() => {
  if (!canvasRef.value)
    return
  board.init(canvasRef.value)
})
</script>

<template>
  <div :class="mode">
    <canvas ref="canvasRef" wh-full />
  </div>
</template>

<style>
.draw .upper-canvas {
  cursor: url('@/assets/tool/draw.svg'), auto !important;
}
.dark .draw .upper-canvas {
  cursor: url('@/assets/tool/draw-dark.svg'), auto !important;
}
.hand .upper-canvas {
  cursor: url('@/assets/tool/hand.svg'), auto !important;
}
.dark .hand .upper-canvas {
  cursor: url('@/assets/tool/hand-dark.svg'), auto !important;
}
.eraser .upper-canvas {
  cursor: url('@/assets/tool/eraser.svg'), auto !important;
}
.dark .eraser .upper-canvas {
  cursor: url('@/assets/tool/eraser-dark.svg'), auto !important;
}
</style>
