<template>
	<div class="settings">
		<wv-header title="settings"></wv-header>

		<wv-panel>
		  <wv-media-box title="Cher" :thumb="thumb" :description="description" to="/"></wv-media-box>
		</wv-panel>

		<wv-panel>
		  <wv-cell title="Sample" is-link to="/">
		    <img :src="thumbSmall" alt="" slot="icon" class="cell-icon">
		  </wv-cell>
		  <wv-cell title="Solution" is-link to="/">
		    <img :src="thumbSmall" alt="" slot="icon" class="cell-icon">
		  </wv-cell>
		  <wv-cell title="ROI Calculator" is-link to="/">
		    <img :src="thumbSmall" alt="" slot="icon" class="cell-icon">
		  </wv-cell>
		  <wv-cell title="Rebate Calculator" is-link to="/">
		    <img :src="thumbSmall" alt="" slot="icon" class="cell-icon">
		  </wv-cell>
		  <wv-cell title="Check Stock" is-link to="/">
		    <img :src="thumbSmall" alt="" slot="icon" class="cell-icon">
		  </wv-cell>
		  <wv-cell title="Price List" is-link to="/">
		    <img :src="thumbSmall" alt="" slot="icon" class="cell-icon">
		  </wv-cell>
		  <wv-cell title="Search Distributor" is-link to="/">
		    <img :src="thumbSmall" alt="" slot="icon" class="cell-icon">
		  </wv-cell>
		  <wv-cell title="Market" is-link to="/">
		    <img :src="thumbSmall" alt="" slot="icon" class="cell-icon">
		  </wv-cell>
		  <wv-cell title="Report" is-link to="/">
		    <img :src="thumbSmall" alt="" slot="icon" class="cell-icon">
		  </wv-cell>
		</wv-panel>

		<V-nav></V-nav>
	</div>
</template>

<script>
  import Nav from '../nav/nav.vue'

  export default {
  	data () {
  		return {
  			"description": 'Ugh. As if.',
  			"thumb": '',
  			"thumbSmall": ''
  		}
  	},
    components: {
      'V-nav': Nav
    }
  }
</script>

<style scoped>
.settings{
	padding-top: 50px;
}
</style>