<template>
<div class="alert">
   <el-alert :title="msg" type="success"></el-alert>
</div>
</template>

<script>
export default {
  name:"alert",
  props:{
    msg:String
  },
  data () {
    return {
    }
  }
}

</script>
<style scoped>
.alert {
  margin: 10px 0;
} 
</style>
