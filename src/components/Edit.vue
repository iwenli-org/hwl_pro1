<template>
<div class="edit">
    <el-row>
      <el-col :span="24"><h3>编辑用户</h3></el-col>
      <el-col class="marBot" v-if="msg" :span="24">
        <Alert :msg="msg"></Alert>
      </el-col>
      <el-col :span="24">
        <el-form ref="form" label-width="80px">
          <el-form-item label="姓名">
            <el-input v-model="users.name"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="users.phone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="users.email"></el-input>
          </el-form-item>
          <el-form-item label="学历">
            <el-input v-model="users.education"></el-input>
          </el-form-item>
          <el-form-item label="毕业学校">
            <el-input v-model="users.school"></el-input>
          </el-form-item>
          <el-form-item label="职业">
            <el-input v-model="users.career"></el-input>
          </el-form-item>
          <el-form-item label="个人简介">
            <el-input v-model="users.profile" type="textarea"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>
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
      msg:''
    }
  },
  methods:{
    getTableData(id){
      this.$http.get("users/"+id).then(function(response){
        this.users = response.body;
      })
    },
    onSubmit(e){
      if(!this.users.name || !this.users.phone || !this.users.email){
        this.msg="请添加相应的信息";
      } else {
        let newUsers = {
          name:this.users.name,
          phone:this.users.phone,
          email:this.users.email,
          education:this.users.education,
          school:this.users.school,
          career:this.users.career,
          profile:this.users.profile
        };
        this.$http.put("users/"+this.users.id,newUsers).then(function(){
          this.$router.push({path:"/",query:{msg:"用户信息更新成功"}});
        })
        e.preventDefault();
      }
      e.preventDefault();
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
.edit {
  margin: 0 20px;
}
.marBot {
  margin-bottom: 10px;
}
</style>
