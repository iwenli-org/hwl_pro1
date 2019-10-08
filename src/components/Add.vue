<template>
<div class="about">
    <el-row>
      <el-col :span="24"><h3>添加用户</h3></el-col>
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
  name:"about",
  data () {
    return {
      users:{},
      msg:''
    }
  },
  methods:{
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
        this.$http.post("users",newUsers).then(function(){
          this.$router.push({path:"/",query:{msg:"用户信息添加成功"}});
        })
        e.preventDefault();
      }
      e.preventDefault();
    }
  },
  created(){
  },
  components:{
    Alert,
  }
}

</script>
<style scoped>
.about {
  margin: 0 20px;
}
.marBot {
  margin-bottom: 10px;
}
</style>
