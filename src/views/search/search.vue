<template>
	<div>
    <wv-search :autofocus="false" placeholder="Search" v-model="value" ></wv-search>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>