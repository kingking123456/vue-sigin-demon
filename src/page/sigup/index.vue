<template>
  <div class="sigup-container">
    <h1>注册</h1>
    <el-form ref="form" label-width="80px" size="mini">
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="passwordConfirm"></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="nickname"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="mobile"></el-input>
      </el-form-item>
      <el-form-item class="v-code-container" label="验证码">
        <el-input v-model="vCode"></el-input>
        <div class="v-code"></div>
      </el-form-item>
      <el-form-item class="buttom-container">
        <el-button type="primary" @click="sigup">注册</el-button>
        <router-link to="/sigin">  <el-button type="info" style="margin-left:50px;">已经有账号,登录</el-button></router-link>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      passwordConfirm: "",
      nickname: "",
      mobile: "",
      vCode: ""
    };
  },
  methods: {
    sigup() {}
  }
};
</script>
<style lang="less">
    .sigup-container{
        h1{
            text-align: center;
            line-height:50px; 
        }
    }
</style>