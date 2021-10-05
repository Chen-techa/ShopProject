<template>
  <div class="Login_Index">
    <!--  头部区域设置 -->
    <el-container>
      <el-aside width="20%">
        <div class="Login_Top">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
          <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
            <el-menu-item @click="To_Home" index="1">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item @click="To_Classification" index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">分类</span>
            </el-menu-item>
            <el-menu-item @click="To_ShopCar" index="2">
              <i class="el-icon-shopping-cart-2"></i>
              <span slot="title">购物车</span>
            </el-menu-item>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span slot="title">用户</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
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
      <el-main width="80%">
        <div class="Login_view">
          <h1>登录</h1>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
            <el-form-item label="用户名" prop="username">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" icon="el-icon-circle-check"
                >登录</el-button
              >
              <el-button type="success" icon="el-icon-circle-plus-outline"
                >注册</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      ruleForm:{
        username:'',
        password:''
      },
      rules:{
        username:[
          {required:true,message:'请输入用户名',trigger:'blur'},
          {min:4,max:8,message:'用户名的长度在4-8',trigger:'blur'}
        ],
        password:[
          {required:true,message:'请输入用户密码',trigger:'blur'},
          //暂时不写，点击登录按钮之后，核对密码，等待登录api完成之后在写
          //由于此界面与注册界面所需的api不同，所以axios在mian.js定义的并不在此处与注册界面引用
        ]
      }
    };
  },
  methods: {
    To_Classification() {
      //   跳转分类页的点击事件
      this.$router.push("Classification");
    },
    To_Home() {
      // 跳转主界面
      this.$router.push("home");
    },
    To_ShopCar() {
      // 跳转购物车界面
      this.$router.push("car");
    },
    To_SginUp() {
      // 跳转用户注册界面
      this.$router.push("SginUp");
    },
  },
};
</script>

<style>
.Login_view {
  width: 40%;
  margin: 20%;
}
</style>