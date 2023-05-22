<template>
    <button>
        <span :style="{'opacity': props.loading ? 0 : 1}" v-if="slots.iconLeft">
            <slot name="iconLeft"></slot>
        </span>
        <span :style="{'opacity': props.loading ? 0 : 1}"><slot></slot></span>
        <span :style="{'opacity': props.loading ? 0 : 1}" v-if="slots.iconRight">
            <slot name="iconRight"></slot>
        </span>
        <slot v-if="props.loading && slots.iconSpinner" name="iconSpinner"></slot>
    </button>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';

const slots = useSlots()

const props = withDefaults(
    defineProps<{
        loading?: boolean
    }>(),
    {
        loading: false
    }
)
</script>