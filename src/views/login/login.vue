<template>
	<div class="login">
		<wv-header title="Sign in"></wv-header>

		<wv-group>
		  <wv-input label="UserName" type="text" v-model="valueText"></wv-input>
		  <wv-input label="Password" type="password" v-model="valueRequired"></wv-input>
		</wv-group>
		
		<wv-button type="primary" :is-loading="false">Sign in</wv-button>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				"valueText": '',
				"valueRequired": ''
			}
		}
	}
</script>

<style scoped>
	.login{
		padding: 50px 16px 16px;
	}
	.login button{
		margin: 16px 0;
	}
</style>