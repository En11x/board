<script setup lang="ts">
import Board from '@/components/board/index.vue'
import Setting from '@/components/set/index.vue'
import Tool from '@/components/tool/index.vue'
import Operator from '@/components/operator/index.vue'
</script>

<template>
  <div
    relative
    h-screen
    w-screen
    overflow-hidden
    font-mono
    bg-1
    dark:color-text-dark
  >
    <Board />
    <Setting />
    <Operator />
    <Tool />
  </div>
</template>
