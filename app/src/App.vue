<template>
  <div id="app">
    <!-- 路由视图显示：用于渲染路由对应的组件 -->
    <transition>
    <router-view v-show="show"></router-view>
    </transition>
    <van-tabbar v-model="active" route v-show="showTabbar">
      <van-tabbar-item 
      v-for="item in menu" 
      :key="item.path" 
      :icon="item.icon" 
      :to="item.path"
      >
      {{item.path === '/mine' && isLogin ? userInfo.username : item.text}}
      </van-tabbar-item>
  </van-tabbar>

    <van-tabbar v-model="active" route v-show="showTabbar" @click="show=!show">
      <van-tabbar-item 
      v-for="item in menu" 
      :key="item.path" 
      :icon="item.icon" 
      :to="item.path"
      
      >
      {{item.text}}
      </van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',

  data(){
      return {
          show:true,
          active:0,
          showTabbar:true,
          menu:[
                {
                path:'/home',
                text:'电影',
                icon:'wap-home-o'
                },
                {
                path:'/cinema',
                text:'影院',
                icon:'tv-o'
                },
                {
                path:'/information',
                text:'资讯',
                icon:'orders-o'
                },
                {
                path:'/mine',
                text:'我的',
                icon:'manager-o'
                },
          ],
      }
  },
  
  computed:{
      isLogin(){

      },
  }
}
</script>
<style scoped>
.v-enter{opacity: 0;}
.v-enter-to{opacity: 1;}
.v-enter-active{transition: opacity 1s;}
</style>
