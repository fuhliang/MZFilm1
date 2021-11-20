<template>
  <div>
      <div class="logo">
            <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png" alt="">
        </div>
        
        <van-form @submit="onSubmit">
            <van-field
                v-model="username"
                name="username"
                label="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="password"
                label="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="warning" native-type="submit">登录</van-button>
            </div>
        </van-form>

        <p @click="gotoreg">没有账号？去注册</p>
  </div>
</template>
<script>
export default {
  name: "Login",
  data(){
    return {
      username:'',
      password:''
    }
  },
  created() {
    console.log("Login", this);
  },
  methods:{

    gotoreg(){
      this.$router.push('/reg')
    },

    onSubmit(values){
      // values： 必须给表单元素添加name属性才能获取值
      console.log('values',values)

      this.$request.get('/login',{
        params:{
          username:values.username,
          password:values.password
        }
        
        }).then(({data})=>{

        // console.log('data=====',Object.prototype.toString(data.username));
        console.log('data======>',data);
        if(data.code === 200){
          this.$toast('登录成功')
          localStorage.setItem('userInfo',JSON.stringify(data.data))
        }else{
          this.$toast('用户名或密码错误')
        }
      })


    }
  }





};
</script>

<style scoped>
.logo{
    height: 60px;
    width: 100%;
    margin: 79px auto 40px;
    text-align: center;
    
}
.logo img{
    /* width: 61px; */
    height: 61px;
    margin: 0 auto;
}
p{
  width: 100%;
  height: 20px;
  text-align: center;
}
</style>
