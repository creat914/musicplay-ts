<template>
   <div class="login-page">

   </div>
</template>
<script lang="ts">
import { reactive,toRefs } from "vue";

interface loginParamts{
    userName:string,
    password:string
}
export default {
  setup() {
    let paramts:loginParamts = reactive({
        userName:"",
        password:""
    })
    return {
        ...toRefs(paramts)
    }
  }
}
</script>
<style lang="less" scoped>
   .login-page{
        width: 100%;
        height: 100%;
        background: url('../../assets/loginBg.jpg');
   }
</style>