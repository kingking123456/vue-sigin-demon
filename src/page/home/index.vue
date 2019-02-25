<template>
  <div class="home-container">
    <el-row class="tac">
      <el-col :span="4">
        <el-menu
          default-active="2-2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户中心</span>
            </template>
            <el-menu-item-group>
              <template slot="title">收货信息</template>
              <el-menu-item index="1-1">所有收货信息</el-menu-item>
              <el-menu-item index="1-2">收货地址</el-menu-item>
              <el-menu-item index="1-3">修改收货地址</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品中心</span>
            </template>
            <el-menu-item-group>
              <template slot="title">商品管理</template>
              <el-menu-item index="2-1">添加商品</el-menu-item>
              <el-menu-item index="2-2">移出商品</el-menu-item>
              <el-menu-item index="2-3">反馈商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <div class="sigout">
          <h2>昵称:{{userInfo.nickname}}</h2>
          <el-button type="danger" @click="sigout">退出登录</el-button>
        </div>
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: JSON.parse(localStorage.getItem("userInfo") || "{}")
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      switch (key) {
        case "1-1":
          this.$router.push("/home/alldetail");
          break;
      }
    },
    sigout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      this.$message({
        type: "success",
        message: "退出成功！"
      });
      this.$router.push("/");
    }
  }
};
</script>
<style lang="less" scoped>
.home-container {
  .el-menu {
    border: none;
  }
  .sigout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      margin-left: 15px;
      font-weight: bold;
    }
  }
}
</style>
