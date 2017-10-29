<template>
  <wv-tabbar :fixed="true">
    <wv-tabbar-item to="/" is-on>
      <span slot="icon">
        <img class="weui-tabbar__icon" slot="icon">
      </span>
       Home
    </wv-tabbar-item>
    <wv-tabbar-item to="/chats">
      <img class="weui-tabbar__icon" slot="icon"> Chats
    </wv-tabbar-item>
    <wv-tabbar-item to="/product">
      <span slot="icon">
        <img class="weui-tabbar__icon" slot="icon">
      </span>
       Product
    </wv-tabbar-item>
    <wv-tabbar-item to="/order">
      <img class="weui-tabbar__icon" slot="icon"> Order
    </wv-tabbar-item>
    <wv-tabbar-item to="/more">
      <img class="weui-tabbar__icon" slot="icon"> More
    </wv-tabbar-item>
  </wv-tabbar>
</template>

<script>
/*  import thumbSmall from '../assets/images/icon_tabbar.png'

  export default {
    data () {
      return {
        thumbSmall
      }
    }
  } */
</script>