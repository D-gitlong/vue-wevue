<template>
	<div class="addImage">
		<wv-header title="New Item" :fixed="false">
		  <div slot="left">
		    <i @click="$router.go(-1)">Cancel</i>
		  </div>
		  <div slot="right">
		    <i @click="$router.push('/')">Done</i>
		  </div>
		</wv-header>
		
		<wv-group>
		  <wv-input placeholder="Name" v-model="valueText"></wv-input>
		  <wv-input placeholder="About" v-model="valueText"></wv-input>
		</wv-group>

		<V-nav></V-nav>
	</div>
</template>

<script>
  import Nav from '../nav/nav.vue'
  export default {
  	data () {
  		return {
  			valueText: ''
  		}
  	},
    components: {
      'V-nav': Nav
    }
  }
</script>

<style scoped>

</style>