<template>
  <div class="Car_Index">
    <!--  头部区域设置 -->
    <el-container>
      <el-aside width="20%">
        <div class="Car_Top">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
          <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
            <el-menu-item index="1" @click="To_Home">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item @click="To_Classification" index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">分类</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-shopping-cart-2"></i>
              <span slot="title">购物车</span>
            </el-menu-item>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span slot="title">用户</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="To_Login">
                  <i class="el-icon-check"></i>
                  <span slot="title">登录</span>
                </el-menu-item>
                <el-menu-item index="1-2" @click="To_SginUp">
                  <i class="el-icon-plus"></i>
                  <span slot="title">注册</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
      </el-aside>
      <el-main width="80%"></el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    To_Classification() {
      //   跳转分类页的点击事件
      this.$router.push("Classification");
    },
    To_Home() {
      // 跳转购物车界面
      this.$router.push("Home");
    },
    To_SginUp() {
      // 跳转用户注册界面
      this.$router.push("SginUp");
    },
    To_Login() {
      this.$router.push("Login");
    },
  },
};
</script>

<style>
</style>