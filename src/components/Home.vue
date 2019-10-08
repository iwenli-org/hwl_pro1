<template>
<div class="home">
  <el-row type="flex">
    <el-col :span="20"><h3>用户管理系统</h3></el-col>
  </el-row>
  <el-row>
    <alerts v-if="msg" :msg="msg"></alerts>
  </el-row>
  <el-row type="flex">
    <el-col :span="24">
      <el-form ref="form">
        <el-input v-model="searchInfo" placeholder="请输入名称" suffix-icon="el-icon-search"></el-input>
      </el-form>
    </el-col>
  </el-row>
  <el-row type="flex">
    <el-col :span="24">
      <el-table
        :data="searchUser(tableData,searchInfo)"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="电话">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <router-link class="detalBtn el-button el-button--danger el-button--mini" :to="'./userDetails/'+scope.row.id">详情</router-link>
            <el-button class="deleteBtn" type="danger" size="mini" @click="deleteUsers(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</div>
</template>

<script>
import alerts from "./Alert"
export default {
  name:"home",
  data () {
    return {
      tableData: [],
      msg:'',
      searchInfo:''
    }
  },
  components:{
    alerts
  },
  methods:{
    getTableData(){
      this.$http.get("users").then(function(response){
        this.tableData = response.body;
      })
    },
    deleteUsers(id){
       this.$http.delete("users/"+id).then(function(){
        this.msg = "用户信息删除成功";
      })
    },
    searchUser(data,inputVal){
      return data.filter(function(data){
        return data.name.match(inputVal);
      })
    }
  },
  created(){
    if(this.$route.query.msg){
      this.msg = this.$route.query.msg;
    }
    this.getTableData();
  }
}

</script>
<style scoped>
.home {
  margin: 0 20px;
}
.el-row {
  width: 100%;
}
a {
  text-decoration: none;
}
.detalBtn {
  margin: 0 10px;
}
</style>
