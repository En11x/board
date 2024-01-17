<script setup lang="ts">
import Popover from '@/components/popover/index.vue'
</script>

<template>
  <Popover>
    <template #content>
      content
    </template>
    <button f-j-b btn-lg>
      Page1 <i i-carbon-chevron-down i-sm />
    </button>
  </Popover>
</template>
