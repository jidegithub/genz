<template>
  <div class="circle" :style="{
  width: width + 'em',
  height: height + 'em',
  fontSize: fontSize + 'rem' }">
    <p class="text-brand">{{character}}</p>
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
  background-color: #E2E8F0;
  border-radius: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    margin-top: -1px;
    font-size: 1em;
    font-weight: bold;
    font-family: Poppins, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;;
  }
}
</style>
