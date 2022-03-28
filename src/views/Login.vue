<template>
  <!--### 登录页面 ###-->
  <div>
    <el-row type="flex" justify="center">
      <el-card class="card-wrap">
        <div slot="header" class="header">my-finacial</div>
        <div class="form-area">
          <el-form ref="ruleForm" :model="ruleForm" label-width="70px" :rules="rules">
            <el-form-item label="用户名">
              <el-input v-model="ruleForm.username" type="text"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="ruleForm.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width:100%" @click="login">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </el-row>
  </div>
</template>
<script>
import { post } from '@/utils/http.js'
import { setToken } from "@/utils/auth";
export default {
  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: "不能不填啊老铁", trigger: "blur" },
        ],
        password: [
          { required: true, message: "不能不填啊老铁", trigger: "blur" },
        ],
      },
    }
  },
  methods: {
    /**登录**/
    login() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          post('/login', this.ruleForm).then(res => {
            setToken(res.token)
            sessionStorage.setItem('nickname', res.nickname)
            this.$router.push('/')
          }).catch((error) => {
            console.log(error)
          })
        }
      })
    }
  }
}

</script>

<style lang="less" scoped>
.card-wrap {
  width: 500px;
  margin-top: 300px;
  .header {
    text-align: center;
  }
  .form-area {
    padding: 30px 20px 30px 0;
  }
}
</style>