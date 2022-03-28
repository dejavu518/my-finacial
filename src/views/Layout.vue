<template>
  <div>
    <el-container>
      <el-aside width="240px">
        <nav-left></nav-left>
      </el-aside>
      <el-container>
        <el-header>
          <headers></headers>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavLeft from "@/components/navLeft";
import Headers from "@/components/header";
export default {
  components: {
    NavLeft,
    Headers,
  },
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #fff;
  color: #333;
  line-height: 60px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.el-aside {
  background-color: #001529;
  color: #333;
  text-align: left;
  height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  height: 100vh;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>