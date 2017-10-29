<template>
	<div class="product">
		<wv-header title="product"></wv-header>
		<div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
		  
		  <wv-grid v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
			  <wv-grid-item to="/"  v-for="item in list" :key="item" :value="item">
			    <img :src="thumbSmall" slot="icon">
			    <span slot="label">GridItem</span>
			  </wv-grid-item>
			  
			</wv-grid>
		  <p v-show="loading" class="loading-tips">
		    <wv-spinner type="snake" color="#444" :size="24"></wv-spinner>
		  </p>
		</div>
		<V-nav></V-nav>
	</div>
</template>

<script>
  import Nav from '../nav/nav.vue'

  export default {
  	data () {
  		return {
  			"list": [],
  			"loading": false
  		}
  	},
    components: {
      'V-nav': Nav
    },
    methods: {
    	loadMore() {
			  this.loading = true;
			  setTimeout(() => {
			    let last = this.list[this.list.length - 1];
			    for (let i = 1; i <= 10; i++) {
			      this.list.push(last + i);
			    }
			    this.loading = false;
			  }, 2500);
			}
    }
  }
</script>

<style scoped>
.product .weui-grid{width:50%;}
.product{
	padding-top: 50px;
}
</style>