<template>
  <div class="login-page">
    <h1>Simple Music Admin</h1>
    <el-form ref="form" :model="paramts" label-width="0px" class="login-form" :rules="rules">
      <el-form-item class="form-item" prop="userName">
        <el-input placeholder="请输入用户名" v-model="paramts.userName" prefix-icon="el-icon-user-solid">
          <!--          <template #prepend><i class="el-icon-user-solid"></i></template>-->
        </el-input>
      </el-form-item>
      <el-form-item class="form-item" prop="password">
        <el-input placeholder="请输入密码" v-model="paramts.password" show-password type="password"
                  prefix-icon="el-icon-lock">
        </el-input>
      </el-form-item>
      <el-form-item class="form-item">
        <el-button type="primary" @click="onSubmit" class="login-btn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
  import {reactive, Ref,ref} from "vue";
  import {Form} from "element-ui";

  interface loginParamts {
    userName: string;
    password: string;
  }
  export default {
    setup() {
      // 验证规则
      const rules = {
        userName: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 5, max: 11, message: '长度在 5 到 11 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      };
      // 表单节点
      const form:Ref<Form | null> = ref(null);
      // 表单提交
      const onSubmit = ()=>{
        (form.value as Form).validate((valid:boolean) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
      // 登录参数
      let paramts: loginParamts = reactive({
        userName: "",
        password: "",
      });
      return {
        paramts,
        rules,
        form,
        onSubmit
      };
    },
  };
</script>
<style lang="less" scoped>
  @white: #FFFFFF;
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


    .login-form {
      width: 350px;

      .form-item, .login-btn {
        width: 100%;
      }
    }
  }
</style>
