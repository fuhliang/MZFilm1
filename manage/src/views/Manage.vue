<template>
  <el-container style="height: 100%">
    <el-header class="header">
      <el-row>
        <el-col :span="12" class="logo">
          <i class="el-icon-s-goods"></i>
          <span>电商后台管理系统</span>
        </el-col>
        <el-col :span="12" style="text-align: right">
          <span>{{ userInfo.username }} </span>
          <el-button type="text" @click="logout">退出</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          style="height: 100%"
          mode="vertical"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ff0"
          router
        >
          <template v-for="item in menu">
            <el-submenu
              :key="item.path"
              :index="baseUrl + item.path"
              v-if="item.submenu"
            >
              <template v-slot:title>
                <i :class="item.icon" style="color: #fff"></i>
                <span>{{ item.text }}</span>
              </template>
              <el-menu-item
                :key="sub.path"
                :index="baseUrl + item.path + sub.path"
                v-for="sub in item.submenu"
                >{{ sub.text }}</el-menu-item
              >
            </el-submenu>

            <el-menu-item :index="baseUrl + item.path" :key="item.path" v-else>
              <i :class="item.icon"></i>
              <span>{{ item.text }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
// import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Manage",
  data() {
    return {
      baseUrl: "/manage",
      menu: [
        {
          text: "首页",
          path: "/home",
          icon: "el-icon-s-home",
        },
        {
          text: "用户管理",
          path: "/user",
          icon: "el-icon-user",
          submenu: [
            {
              text: "添加用户",
              path: "/add",
            },
            {
              text: "用户列表",
              path: "/list",
            },
          ],
        },
        {
          text: "影院管理",
          path: "/address",
          icon: "el-icon-shopping-bag-1",
          submenu: [
            {
              text: "添加影院",
              path: "/add",
            },
            {
              text: "影院列表",
              path: "/list",
            },
          ],
        },
        
      ],
      currentIndex: 0,
    };
  },
  computed: {
    ...mapState(["userInfo"]),
    ...mapGetters(["isLogin"]),
  },
  methods: {
    ...mapActions({
      logout(dispatch){
        dispatch('logout');

        this.$router.push('/login')
      }
    }),
  },
};
</script>
<style lang="scss">
.header {
  line-height: 60px;
  color: #fff;
  background-color: rgba(67, 74, 80, 0.9);
  .logo {
    font-size: 20px;
    color: #fff;
    i {
      font-size: 36px;
      vertical-align: middle;
      margin-right: 5px;
      color: #fc0;
    }
  }
}
.aside-menu {
  z-index: 10;
  position: relative;
  width: 200px !important;
  overflow: hidden;
  .btnCollapse {
    z-index: 3000;
    position: absolute;
    right: -20px;
    top: 0;
    color: #f90;
  }
  &.collapse {
    width: 65px !important;
    .btnCollapse {
      right: 20px;
      i {
        font-weight: bold;
      }
    }
  }
}
</style>