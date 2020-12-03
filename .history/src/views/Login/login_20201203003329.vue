<template>
   <div class="login-page">
        <h1>Login</h1>
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
   .center{
       display: flex;
       justify-content: center;
       align-items: center;
   }
   
   .login-page{
        width: 100%;
        height: 100%;
        background: url('../../assets/loginbg.jpg') no-repeat center;
        background-size: cover;
        .center;
        flex-direction: column;


        h1{
            font-size: 50px;
        }

   }
</style>