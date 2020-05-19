<template>
  <svg :class="Computed.svgClass" aria-hidden="true">
    <use :xlink:href="Computed.iconName" />
  </svg>
</template>

<script>
import { reactive, ref, computed } from "@vue/composition-api";
export default {
  name: "svgIcon",
  props: {
    iconClass: String,
    classIconName: String
  },
  setup(props) {
    // console.log(props);
    const Computed = reactive({
      iconName: computed(() => `#icon-${props.iconClass}`),
      svgClass: computed(() =>
        props.classIconName ? `svg-icon ${props.classIconName}` : `svg-icon`
      )
    });
    return { Computed };
  }
};
</script>

<style lang="less">
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  color: red;
  &.font12px {
    font-size: 12px;
  }
  &.font50px {
    font-size: 50px;
  }
}
</style>