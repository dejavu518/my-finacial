<template>
  <div>
    <el-row type="flex" justify="center">
      <el-card class="wrap">
        <div slot="header" class="clearfix">
          <h2 style="text-align:center">蚂蚁金融后台管理系统</h2>
        </div>
        <div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item label="用户名" prop="username" label-width="80px">
              <el-input type="text" v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password" label-width="80px">
              <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label-width="80px">
              <el-button type="primary" style="width:100%" @click="login">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import { post } from "@/utils/http.js";
import { setToken } from "@/utils/auth";
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "不能不填啊老铁", trigger: "blur" },
        ],
        password: [
          { required: true, message: "不能不填啊老铁", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          post("/login", this.ruleForm).then((res) => {
            setToken(res.token);
            sessionStorage.setItem("nickname",res.nickname);
            this.$router.push("/")
          }).catch((error)=>{
            console.log(error)
          })
        }
      });
    },
  },
};
</script>

<style scoped>
.fl {
  background: blue;
}
.fr {
  background: red;
}
.wrap {
  width: 500px;
  margin-top: 200px;
}
</style>