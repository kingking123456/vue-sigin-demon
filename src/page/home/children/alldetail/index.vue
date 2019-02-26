<template>
  <div class="alldetail-container">
    <el-table :data="allDetail" style="width: 100%">
      <el-table-column prop="id" label="编号" width="150"></el-table-column>
      <el-table-column label="配送信息">
        <el-table-column prop="receiver_name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="mobile" label="手机号" width="120"></el-table-column>
        <el-table-column label="地址">
          <el-table-column prop="province" label="省份" width="120"></el-table-column>
          <el-table-column prop="city" label="市" width="120"></el-table-column>
          <el-table-column prop="area" label="区/县" width="120"></el-table-column>
          <el-table-column prop="detailed_address" label="地址" width="300"></el-table-column>
          <el-table-column prop="postcode" label="邮编" width="120"></el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      // area: "长安区"
      // city: "石家庄市"
      // common_used: 1
      // detailed_address: "金融港B15栋2楼"
      // id: 2
      // mobile: "13030303030"
      // postcode: "430070"
      // province: "河北省"
      // receiver_name: "传智人牛逼"
      allDetail: []
    };
  },
  created() {
    this.getAllDetail();
  },
  methods: {
    getAllDetail() {
      let token = localStorage.getItem("token") || "";
      this.$http
        .get("users/getReceiverAddress")
        .then(response => {
          console.log(response.data.data);
          this.allDetail = response.data.data
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error.response.data.errMsg,
            type: "error"
          });
        });
    }
  }
};
</script>
<style lang="less" scoped>
.allDetail-container {
  padding: 50px;
}
</style>
