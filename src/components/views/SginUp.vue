<template>
  <div class="SginUp_Index">
    <!--  头部区域设置 -->
    <el-container>
      <el-aside width="20%">
        <div class="SginUp_Top">
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
                <el-menu-item index="1-1" @click="To_Login">
                  <i class="el-icon-check"></i>
                  <span slot="title">登录</span>
                </el-menu-item>
                <el-menu-item index="1-2">
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
          <h1>注册</h1>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <el-radio-group v-model="ruleForm.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password" type="password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="ckpassword">
              <el-input v-model="ruleForm.ckpassword" type="password"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="电话号码" prop="tel">
              <el-input v-model="ruleForm.tel"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" icon="el-icon-circle-check"
                >确定</el-button
              >
              <el-button type="danger" icon="el-icon-remove-outline"
                >取消</el-button
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
    // 自定义密码验证
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      isCollapse: true,
      ruleForm: {
        username: "",
        password: "",
        ckpassword: "",
        sex: "",
        email: "",
        tel: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 4, max: 8, message: "用户名的长度在4-8", trigger: "blur" },
        ],
        password: [
          { validator: validatePass, trigger: 'blur' },
          { min: 6, max: 12, message: "密码长度在6-12位", trigger: "blur" },
        ],
        ckpassword: [
          {validator: validatePass2, trigger: 'blur' },
          {min: 6, max: 12, message: "密码长度在6-12位", trigger: "blur"},
        ],
      },
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
    To_Login() {
      this.$router.push("Login");
    },
  },
};
</script>

<style>
.Login_view {
  width: 40%;
  margin-top: 10%;
  margin-left: 20%;
}
</style>