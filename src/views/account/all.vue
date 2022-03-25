<template>
  <div>
    <el-breadcrumb separator="/" class="bread">
      <el-breadcrumb-item v-for="(item, index) in breadlist" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card style="margin-bottom: 10px">
      <el-row>
        <el-col :span="8">
          <el-input placeholder="手机号、姓名、角色类型">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="8" :offset="8" style="text-align: right">
          <el-button type="primary" @click="create"
            >新建角色</el-button
          >
          <el-button :disabled="!selected.length" @click="operate('启动')"
            >启动</el-button
          >
          <el-button :disabled="!selected.length" @click="operate('冻结')"
            >冻结</el-button
          >
          <el-button :disabled="!selected.length" @click="operate('删除')"
            >删除</el-button
          >
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50"> </el-table-column>
        <el-table-column type="index" width="50" label="序号">
        </el-table-column>
        <el-table-column prop="account" label="账户"></el-table-column>
        <el-table-column prop="name" label="用户名"></el-table-column>
        <el-table-column prop="character" label="角色"></el-table-column>
        <el-table-column prop="remark" label="备注"></el-table-column>
        <el-table-column prop="reason" label="创建原因"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            {{ scope.row.status == 1 ? "已启用" : "未启用" }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
            <el-button size="mini">{{
              scope.row.status == 1 ? "禁用" : "启用"
            }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <el-form :model="form" :rules="rules" ref="forms">
        <el-form-item label="角色" label-width="100px" prop="character">
          <el-select
            v-model="form.character"
            placeholder="请选择角色"
            style="width: 100%"
          >
            <el-option label="业务人员" value="1"></el-option>
            <el-option label="审核人员" value="2"></el-option>
            <el-option label="风控经理" value="3"></el-option>
            <el-option label="管理员" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" label-width="100px" prop="remark">
          <el-input v-model="form.remark" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="创建原因" label-width="100px" prop="reason">
          <el-input
            type="textarea"
            v-model="form.reason"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onOk">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import breadCrumb from "@/mixins/breadCrumb.js";
import { get } from "@/utils/http";
export default {
  mixins: [breadCrumb],
  data() {
    return {
      tableData: [],
      selected: [],
      accountList: [],
      dialogVisible: false,
      form: {
        character: "",
        remark: "",
        reason: "",
      },
      rules: {
        character: [
          { required: true, message: "请选择角色", trigger: "change" },
        ],
        remark: [{ required: true, message: "请输入备注", trigger: "blur" }],
        reason: [
          { required: true, message: "请输入创建原因", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    this.list();
  },
  computed:{
    a(){
      return 1+2
    }
  },
  methods: {
    create(){
      this.dialogVisible=true;
      this.$nextTick(()=>{
            this.$refs["forms"].resetFields();
      }) ;
     
    },
    list() {
      get("/all").then((res) => {
        this.tableData = res.data.list;
      });
    },
    handleSelectionChange(selection) {
      this.selected = selection;
      var arr = selection.map((item) => {
        return item.account;
      });
      this.accountList = arr;
    },
    operate(type) {
      this.$notify({
        title: "操作提示",
        message: JSON.stringify(this.accountList) + type + "成功",
        type: "success",
      });
    },
    onOk() {
      this.$refs["forms"].validate((valid) => {
        if (valid) {
          //发送请求
          console.log(this.form.character);
          this.$message.success("创建成功");
          this.list();
          this.dialogVisible = false;
         this.$refs["forms"].resetFields()
        }
      });
    },
    handleEdit(row){
      this.dialogVisible=true;
      this.form={
        character: row.character,
        remark:row.remark,
        reason: row.reason,
      }
    }
  },
};
</script>

<style scoped>
</style>