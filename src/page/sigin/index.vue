 <template>
  <div class="sigin-container">
    <h1>登录后台系统</h1>
    <el-form ref="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="sigin">立即登录</el-button>
        <router-link to="/sigup"><el-button type="info" style="margin-left:50px;">去注册</el-button></router-link>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    sigin() {
      let { username, password } = this;
      if (username.trim().length == 0 || password.trim().length == 0) {
        return this.$message({
          showClose: true,
          message: "用户名或者密码不能为空哦哦!",
          type: "warning"
        });
      }
      this.$http
        .post("/users/login", {
          username,
          password
        })
        .then(response => {
          // console.log(response.data);
          this.$message({
            showClose: true,
            message: response.data.succMsg,
            type: "success"
          });
          localStorage.setItem("token", response.data.data.token);
          localStorage.setItem("userInfo", JSON.stringify(response.data.data));
          this.$router.push("/home");
        })

        // .catch(error => {
        //   console.log(error.data);
        //   this.$message({
        //     showClose: true,
        //     message: error.response.data.errMsg,
        //     type: "error"
        //   });
        // });
    }
  }
};
</script>
<style lang="less">
.sigin-container {
  width: 600px;
  margin: 100px auto;
  h1 {
    text-align: center;
    line-height: 50px;
    font-size: 24px;
  }
}
</style>
  
