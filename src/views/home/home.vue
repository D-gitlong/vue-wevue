<template>
	<div class="home">
		<div class="content">
      <V-search></V-search>
      <V-content></V-content>  
    </div>
		<V-nav></V-nav>
	</div>
</template>

<script>
  import Search from '../search/search.vue'
  import Nav from '../nav/nav.vue'
  import HContent from '../home/home-content.vue'

  export default {
    components: {
      'V-search': Search,
      'V-nav': Nav,
      'V-content': HContent
    }
  }
</script>

<style scoped>
.content{
  padding: 16px;
}
</style>