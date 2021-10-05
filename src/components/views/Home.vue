<template>
  <div class="Home_Index">
    <!--  头部区域设置 -->
    <el-container>
      <el-aside width="20%">
        <div class="Home_Top">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
          <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
            <el-menu-item index="1">
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
                <el-menu-item index="1-2" @click="To_SginUp">
                  <i class="el-icon-plus"></i>
                  <span slot="title">注册</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
      </el-aside>
      <el-main>
        <!-- 轮播设置 -->
        <div class="carousel">
          <el-carousel indicator-position="outside" type="card">
            <el-carousel-item v-for="item in imgdata" :key="item.id">
              <img :src="item.image_src" alt="" class="carousel_images" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- 首页导航栏 -->
        <div class="Navigation">
          <el-row>
            <el-col
              v-for="it in Navigation"
              :key="it.id"
              :span="1"
              class="Navigation_img"
            >
              <img :src="it.image_src" alt="" />
            </el-col>
          </el-row>
        </div>
        <!-- 楼层 -->
        <!--  一共18个image_src，使用element的card，每一行中有三个card -->
        <div class="floordata"></div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      imgdata: "", //定义轮播数据
      Navigation: "",
      fooldata:'',
      foolimages:'',
    };
  },
  methods: {
    To_Classification() {
      //   跳转分类页的点击事件
      this.$router.push("Classification");
    },
    To_ShopCar() {
      // 跳转购物车界面
      this.$router.push("Car");
    },
    To_SginUp() {
      // 跳转用户注册界面
      this.$router.push("SginUp");
    },
    To_Login() {
      this.$router.push("Login");
    },
  },
  mounted() {
    // 获取轮播图
    this.$http.get("home/swiperdata").then((result) => {
      // console.log(result);
      this.imgdata = result.data.message;
      // console.log(this.imgdata);
    });
    // 获取首页导航
    this.$http.get("home/catitems").then((res) => {
      // console.log(res);
      this.Navigation = res.data.message;
    });
    // 获取分类楼层（大类）
    this.$http.get("home/floordata").then((fool) => {
      // console.log(fool);
      this.fooldata = fool.data.message;
      console.log(this.fooldata)
    });
  },
};
</script>

<style>
.Navigation_img {
  margin-left: 15%;
}
</style>