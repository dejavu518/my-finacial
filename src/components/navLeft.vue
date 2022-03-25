<template>
  <div>
    <h1 class="title">樱花金融后台管理系统</h1>
    <el-menu background-color="#001529" text-color="#fff" :router="true" >
      <menus v-for="(item,index) in menuData" :menu="item" :key="index"></menus>
    </el-menu>
  </div>
</template>
menu
<script>
import { get } from "@/utils/http";
import menus from "./menu";
export default {
  data() {
    return {
      menuData: [],
    };
  },
  mounted() {
    get("/menu").then((res) => {
      this.menuData = res.data;
    });
  },
  components: {
    menus,
  },
};
</script>

<style scoped>
.title {
  line-height: 50px;
  color: #fff;
  text-align: center;
}
.el-menu{border: none;}
</style>