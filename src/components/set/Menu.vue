<script setup lang="ts">
import Popover from '@/components/popover/index.vue'
</script>

<template>
  <Popover>
    <template #content>
      <Popover trigger="hover" placement="right-start" :offset="{ x: -5, y: 5 }">
        <template #content>
          <button btn-lg>
            Dark mode
          </button>
        </template>
        <button f-j-b btn-lg>
          Preference <i i-carbon-chevron-right i-sm />
        </button>
      </Popover>
    </template>
    <button btn-sm>
      <i i-carbon-menu i-sm />
    </button>
  </Popover>
</template>
