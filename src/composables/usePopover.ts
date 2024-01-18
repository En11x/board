import type { Ref } from 'vue'
import { nextTick, onBeforeUnmount, reactive, toRefs, watch } from 'vue'
import type { Instance } from '@popperjs/core/lib/popper-lite.js'
import { createPopper } from '@popperjs/core/lib/popper-lite.js'
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js'
import offset from '@popperjs/core/lib/modifiers/offset'
import type { Placement } from '@popperjs/core'

export interface PopoverProps {
  placement?: Placement
  offset?: {
    x: number
    y: number
  }
}

interface IPopover extends PopoverProps {
  popover: Ref<any>
  trigger: Ref<any>
}

export function usePopover(props: IPopover) {
  const { popover, trigger, placement } = toRefs(props)
  const state = reactive({
    isOpen: false,
    popoverInstance: null as unknown as Instance,
  })

  const open = () => {
    if (state.isOpen)
      return

    state.isOpen = true
  }

  const close = () => {
    if (!state.isOpen)
      return

    state.isOpen = false
  }

  const initializePopover = async () => {
    await nextTick()
    state.popoverInstance = createPopper(trigger.value, popover.value, {
      placement: placement?.value,
      modifiers: [
        preventOverflow,
        offset,
        {
          name: 'offset',
          options: {
            offset: props.offset ? [props.offset.x, props.offset.y] : [0, 10],
          },
        },
      ],
    })

    state.popoverInstance.update()
  }

  watch([() => state.isOpen], async ([isOpen]) => {
    if (isOpen)
      await initializePopover()
  })

  onBeforeUnmount(() => {
    state.popoverInstance?.destroy()
  })

  return {
    ...toRefs(state),
    open,
    close,
  }
}
