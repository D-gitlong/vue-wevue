<template>
	<div class="chats">
		<wv-header title="wevue">
		  <div class="btn-menu" slot="right">
		    <i class="weui-icon-success" @click="$router.push('/addImage')"></i>
		  </div>
		</wv-header>

		<wv-panel>
		  <wv-media-box v-for="c in chatsLists" :title="c.name" :thumb="c.profilePic" :description="c.about" to="/"></wv-media-box>
		</wv-panel>
		<V-nav></V-nav>
	</div>
</template>

<script>
	// import axios from 'axios'
	import { mapState, mapGetters, mapActions } from 'vuex'
  import Nav from '../nav/nav.vue'
  export default {
  	computed: {
      ...mapState(['chatsLists'])
    },
  	mounted () {
      this.loadChatsList()
  	},
    methods: {
      ...mapActions(['loadChatsList'])
    },
    components: {
      'V-nav': Nav
    }
  }
</script>

<style scoped>
.chats{
	padding-top: 50px;
}
</style>