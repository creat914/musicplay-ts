<template>
  <div class="login-page">
    <h1>Simple Music Admin</h1>
    <el-form ref="form" :model="paramts" label-width="0px" class="login-form">
      <el-form-item class="form-item">
        <el-input placeholder="请输入用户名" v-model="paramts.userName" prefix-icon="el-icon-user-solid">
<!--          <template #prepend><i class="el-icon-user-solid"></i></template>-->
        </el-input>
      </el-form-item>
      <el-form-item class="form-item">
        <el-input placeholder="请输入密码" v-model="paramts.password" show-password type="password"  prefix-icon="el-icon-lock">
        </el-input>
      </el-form-item>
      <el-form-item class="form-item">
        <el-button type="primary" @click="onSubmit" class="login-btn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
  import {reactive, toRefs} from "vue";

  interface loginParamts {
    userName: string;
    password: string;
  }

  export default {
    setup() {
      let paramts: loginParamts = reactive({
        userName: "",
        password: "",
      });
      return {
        paramts,
      };
    },
  };
</script>
<style lang="less" scoped>
  @white:#FFFFFF;
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-page {
    width: 100%;
    height: 100%;
    background: url("../../assets/loginbg.jpg") no-repeat center;
    background-size: cover;
    .center;

    flex-direction: column;

    h1 {
      font-size: 35px;
      margin-top: -100px;
      color: @white;
    }


    .login-form{
      width: 350px;

      .form-item,.login-btn{
        width: 100%;
      }
    }
  }
</style>
