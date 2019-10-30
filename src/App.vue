<template>
<el-container class="app">
  <el-header type="flex">
  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal"  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item >用户管理系统</el-menu-item>
    <el-menu-item index="2">
        <router-link class="menuA" :to="{path:'/'}">主页</router-link>
    </el-menu-item>
    <el-menu-item index="3">
        <router-link class="menuA" :to="{path:'/About'}" >关于我们</router-link>
    </el-menu-item>
    <el-menu-item index="4">
        <router-link class="menuA" :to="{path:'/add'}">添加用户</router-link>
    </el-menu-item>
    </el-menu>
    <div class="line"></div>
  </el-header>
  <el-main>
    <router-view></router-view>
  </el-main>
</el-container>
</template>

<script>
export default {
  name:"app",
  data () {
    return {
      activeIndex2: '2'
    }
  },
  methods:{
    
  }
}

</script>
<style>
@media (max-width: 700px){
  .el-header,.el-main,.el-menu-item,.el-table {
    font-size: 12px!important;
  }
}

.menuA {
    line-height: 60px;
    display: inline-block;
}
.el-header,.el-main {
  padding: 0!important;
}
a{
 text-decoration: none;
 cursor: pointer;
}
</style>
