<template>
  <div class="app">
    <div class="center">
      <div class="input_box">
        <div class="title_1">Login</div>
        <div class="title_2">登录大数据管理后台系统</div>
        <div class="input_list">
          <img src="@/assets/img/icon_02.png" alt="" class="img1" />
          <input type="text" placeholder="输入管理员账号" v-model="phone"/>
        </div>
        <div class="input_list">
          <img src="@/assets/img/icon_01.png" alt="" class="img1" />
          <input type="password" placeholder="输入密码" v-model="code"/>
        </div>
        <button @click="toAdmin">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { login } from "network/homerequest"
  import Flexible from '@/assets/js/index.js'
  export default {
    data(){
      return{
        phone:'',
        code:''
      }
    },
  comments:{
    Flexible
  },
    methods:{
      toAdmin(){
        login(this.phone,this.code)
            .then((res)=>{
              if (res.code == 200){
                this.$router.push('/main/home').catch((e) => {})
                this.$Message.info('欢迎回来！');
                sessionStorage.setItem('token', res.result.token)
                this.$store.commit('changeLogin',true)
                console.log(1);
              }else {
                this.$Message.error('账号或密码错误');
              }
            })
            .catch(()=>{
              this.$Message.warning('系统繁忙，请稍后再试');
            })
      }
    }
  }
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .app {
    display: flex;
    justify-self: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: url("~@/assets/img/pic.png") no-repeat;
    background-size: 100% 100%;
    background-position: 50%;
    overflow: hidden;
    .center {
      position: relative;
      width: 15rem;
      height: 10rem;
      background: url("~@/assets/img/pic_2.png") no-repeat;
      background-size: 100% 100%;
      background-position: 50%;
      margin: 0 auto;
    }
    .input_box {
      position: absolute;
      top: 2.7rem;
      right: 1.075rem;
      width: 5.0125rem;
      .title_1 {
        font-size: .425rem;
        color: #666;
        font-weight: 600;
      }
      .title_2 {
        font-size: .3125rem;
        color: #666;
        margin-top: 0.25rem;
        font-weight: 600;
      }
      .input_list {
        display: flex;
        align-items: center;
        width: 5.0125rem;
        height: 0.8rem;
        background-color: #f3f3f3;
        border-radius: 0.4rem;
        margin-top: 0.575rem;
        img {
          width: 0.225rem;
          height: 0.2375rem;
          margin-left: 0.3rem;
        }
        input {
          border: none;
          outline: none;
          background-color: #f3f3f3;
          font-size: .25rem;
          margin-left: 0.1625rem;
          width: 3.125rem;
          color: #999;
        }
      }
      button {
        border: none;
        outline: none;
        margin: 0;
        padding: 0;
        width: 5.0125rem;
        height: 0.8rem;
        background-color: #4c64f7;
        border-radius: 0.4rem;
        margin-top: 0.575rem;
        font-size: 0.3625rem;
        color: #fff;
      }
    }
  }
</style>
