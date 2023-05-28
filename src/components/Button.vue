<template>
  <button>
    <span :style="{ opacity: loading ? 0 : 1 }" v-if="slots.iconLeft">
      <slot name="iconLeft"></slot>
    </span>
    <span :style="{ opacity: loading ? 0 : 1 }"><slot></slot></span>
    <span :style="{ opacity: loading ? 0 : 1 }" v-if="slots.iconRight">
      <slot name="iconRight"></slot>
    </span>
    <slot v-if="loading && slots.iconSpinner" name="iconSpinner"></slot>
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    loading?: boolean;
  }>(),
  {
    loading: false,
  }
);

const slots = defineSlots<{
  iconSpinner?: (props: {}) => unknown;
  default?: (props: {}) => unknown;
  iconLeft?: (props: {}) => unknown;
  iconRight?: (props: {}) => unknown;
}>();
</script>
