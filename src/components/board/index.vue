<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { board } from '@/utils/board'

const canvasRef = ref<HTMLCanvasElement>()

onMounted(() => {
  if (!canvasRef.value)
    return
  board.init(canvasRef.value)
})
</script>

<template>
  <canvas ref="canvasRef" wh-full f-c-c />
</template>
