<script setup lang="ts">
import { toRefs } from 'vue'
import Popover from '@/components/popover/index.vue'
import { useMenuStore } from '@/store/modules/menu'

const { darkMode, toggleDarkMode } = toRefs(useMenuStore())
</script>

<template>
  <Popover>
    <template #content>
      <Popover trigger="hover" placement="right-start" :offset="{ x: -5, y: 5 }">
        <template #content>
          <button f-c-c btn-lg @click="toggleDarkMode">
            <div i-sm>
              <i v-if="darkMode" i-carbon-checkmark />
            </div>
            <span flex-grow-2>Dark mode</span>
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
