<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
      <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card style="margin-bottom:20px">
      <el-row :gutter="16">
        <el-col :span="6">
          <el-input placeholder="请输入姓名" v-model.trim="searchValue.name" />
        </el-col>
        <el-col :span="6">
          <el-select v-model="searchValue.education" placeholder="请选择学历" style="width:100%">
            <el-option value="1" label="小学及以下">小学及以下</el-option>
            <el-option value="2" label="初中">初中</el-option>
            <el-option value="3" label="高中">高中</el-option>
            <el-option value="4" label="本科">本科</el-option>
            <el-option value="5" label="研究生">研究生</el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="请输入手机号" v-model.trim="searchValue.mobile" />
        </el-col>
        <el-col :span="6" style="text-align:right">
          <el-button type="primary" @click="handleSearch">查询</el-button>
          <el-button type="primary" @click="reset">重置</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <div style="text-align:left;margin-bottom:20px">
        <el-button type="primary" icon="el-icon-plus" >新增客户</el-button>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="number" label="客户编号"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="mobile" label="手机号码"></el-table-column>
        <el-table-column prop="idnum" label="身份证号"></el-table-column>
        <!-- <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.status==1" effect="dark">已启用</el-tag>
          <el-tag type="danger" v-else effect="dark">已禁用</el-tag>
        </template>
        </el-table-column>-->
        <el-table-column prop="education" label="学历">
          <template slot-scope="scope">
            <span v-if="scope.row.education==1">小学及以下</span>
            <span v-else-if="scope.row.education==2">初中</span>
            <span v-else-if="scope.row.education==3">高中</span>
            <span v-else-if="scope.row.education==4">本科</span>
            <span v-else-if="scope.row.education==5">研究生</span>
          </template>
        </el-table-column>
        <el-table-column prop="job" label="职业"></el-table-column>
        <el-table-column prop="address" label="住址"></el-table-column>
        <el-table-column prop="marry" label="婚姻状况">
          <template slot-scope="scope">
            <span>{{scope.row.marry==1?"已婚":"未婚"}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="operate" label="操作" width="210">
          <template>
            <el-button size="mini" type="primary" @click="detail">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
            <el-button size="mini" @click="detail">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import breadCrumb from "@/mixins/breadCrumb.js";
export default {
  mixins: [breadCrumb],
  data() {
    return {
      originData:[
        {
          number: 1001,
          name: "赵铁柱",
          mobile: "18833345675",
          idnum: "378489990876546578",
          education: 2,
          job: "司机",
          address: "山东省青岛市市南区香港中路100号",
          marry: 1,
        },
        {
          number: 1001,
          name: "詹姆斯",
          mobile: "13533387675",
          idnum: "378489998776546578",
          education: 3,
          job: "球员",
          address: "广东省东莞市市南区香港中路100号",
          marry: 1,
        },
        {
          number: 1003,
          name: "李狗盛",
          mobile: "15533325375",
          idnum: "378489990876546578",
          education: 2,
          job: "厨师",
          address: "山东省青岛市市南区香港中路100号",
          marry: 2,
        },
        {
          number: 1004,
          name: "张大彪",
          mobile: "18833345675",
          idnum: "378489990876546578",
          education: 4,
          job: "司机",
          address: "山东省青岛市市南区香港中路100号",
          marry: 2,
        },
        {
          number: 1005,
          name: "王老六",
          mobile: "17673345675",
          idnum: "378489990876546578",
          education: 5,
          job: "老板",
          address: "山东省青岛市市南区香港中路100号",
          marry: 1,
        },
      ],
      searchValue: {
        name: "",
        education: "",
        mobile: "",
      },
      tableData: [
        {
          number: 1001,
          name: "赵铁柱",
          mobile: "18833345675",
          idnum: "378489990876546578",
          education: 2,
          job: "司机",
          address: "山东省青岛市市南区香港中路100号",
          marry: 1,
        },
        {
          number: 1001,
          name: "詹姆斯",
          mobile: "13533387675",
          idnum: "378489998776546578",
          education: 3,
          job: "球员",
          address: "广东省东莞市市南区香港中路100号",
          marry: 1,
        },
        {
          number: 1003,
          name: "李狗盛",
          mobile: "15533325375",
          idnum: "378489990876546578",
          education: 2,
          job: "厨师",
          address: "山东省青岛市市南区香港中路100号",
          marry: 2,
        },
        {
          number: 1004,
          name: "张大彪",
          mobile: "18833345675",
          idnum: "378489990876546578",
          education: 4,
          job: "司机",
          address: "山东省青岛市市南区香港中路100号",
          marry: 2,
        },
        {
          number: 1005,
          name: "王老六",
          mobile: "17673345675",
          idnum: "378489990876546578",
          education: 5,
          job: "老板",
          address: "山东省青岛市市南区香港中路100号",
          marry: 1,
        },
      ],
    };
  },
  methods: {
    //搜索功能
    handleSearch() {

      this.tableData = this.originData.filter((item)=>{
         return  item.name==(this.searchValue.name? this.searchValue.name:item.name )&&item.education==(this.searchValue.education?this.searchValue.education:item.education)&&item.mobile==(this.searchValue.mobile?this.searchValue.mobile:item.mobile)
      });
    },

    //重置功能
    reset() {
      this.searchValue = {
        name: "",
        education: "",
        mobile: "",
      };
      this.tableData=this.originData
    },
    //详情功能
    detail(){
        this.$router.push("/customer/detail")
    }
  },
};
</script>

<style lang="less" scoped>
</style>