<template>
  <svg :class="iconStyle" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
  export default {
    name: 'icon',
    props: {
      iconClass: {
        type: String,
        required: true
      },
      iconStyle: String
    },
    computed: {
      iconName() {
        return `#icon-${this.iconClass}`
      }
    }
  }
</script>

<style>
.small{
  width: 1em;
  height: 1em;
}
</style>