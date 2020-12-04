<template>
  <div class="circle" :style="{
  width: width + 'px',
  height: height + 'px',
  fontSize: fontSize + 'rem' }">
    <p class="circle_char">{{character}}</p>
  </div>
</template>

<script>
export default {
  name: 'firstchar',
  props: {
    character: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      default: 1.5,
    },
    width: {
      type: Number,
      default: 1.5,
    },
    fontSize: {
      type: Number,
      default: 1.5,
    },
  },
};
</script>

<style lang="scss" scoped>
  .circle {
  border: 0.1em solid #E2E8F0;
  background-color: var(--first-char-black);
  border-radius: 100%;
  text-align: center;
  @include flex-center;

  & p {
    margin-top: -1px;
    font-size: 1em;
    color: var(--color-grey-light-2);
    font-weight: bold;
    font-family: Poppins, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;;
  }
}
</style>
