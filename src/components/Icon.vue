<template>
  <div v-html="iconSvg" />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "Icon",
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const iconSvg = ref("");

    watch(
      () => props.icon,
      async (newIcon) => {
				//@ts-ignore
        const { [newIcon]: iconPath } = await import("@mdi/js");
        iconSvg.value = iconPath;
      },
      { immediate: true }
    );

    return { iconSvg };
  },
});
</script>

<style scoped>
div {
  width: 24px;
  height: 24px;
  fill: currentColor;
}
</style>
