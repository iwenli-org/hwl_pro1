<template>
<div class="userDetails">
    <el-row type="flex">
      <h3>用户详情</h3>
      <router-link class="el-button el-button--warning el-button--mini backList" to="/">返回列表</router-link>
    </el-row>
    <el-row type="flex">
      <el-col class="marBot" v-if="msg" :span="24">
        <Alert :msg="msg"></Alert>
      </el-col>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{users.name}}</span>
                <router-link class="el-button el-button--primary el-button--mini el-icon-edit editBtn" :to="'/edit/'+users.id">编辑</router-link>
                <el-button class="deleteBtn" type="danger" size="mini" icon="el-icon-delete" @click="deleteUsers(users.id)">删除</el-button>
            </div>
            <div v-for="(val,key) in users" :key="key" class="text item">
                {{key}}:{{val}}
            </div>
        </el-card>
    </el-row>
</div>
</template>

<script>
import Alert from './Alert'
export default {
  name:"edit",
  data () {
    return {
      users:{},
      msg:""
    }
  },
  methods:{
    getTableData(id){
      this.$http.get("users/"+id).then(function(response){
        this.users = response.body;
      })
    },
    deleteUsers(id){
       this.$http.delete("users/"+id).then(function(){
        this.$router.push({path:"/",query:{msg:"用户信息删除成功"}})
      })
    }
  },
  components:{
    Alert,
  },
  created(){
    this.getTableData(this.$route.params.id);
  }
}

</script>
<style scoped>
@media (max-width: 700px){
  .backList,.editBtn,.deleteBtn{
    margin-top: 8px!important;
}
}

.userDetails {
    margin: 0 20px;
}
.text {
    font-size: 14px;
}
a {
    text-decoration: none;
}
.backList,.editBtn,.deleteBtn{
    height: 30px;
    margin-top: 18px;
    margin-left: 20px;
}
.item {
    padding: 15px;
    border-bottom: 1px solid #eee;
}
.item:last-child{
    border-bottom: none;
}
.el-card {
    width: 100%;
}
.marBot {
  margin-bottom: 10px;
}
</style>
