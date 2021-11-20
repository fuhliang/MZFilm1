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
                <van-button round block type="warning" native-type="submit">注册</van-button>
            </div>
        </van-form>
    
    </div>
</template>
<script>
// import qs from 'qs'
export default {
    name:'Reg',
     data() {
        return {
        username: '',
        password: '',
        };
    },
     methods: {
        onSubmit(values) {
        console.log('submit', values);
            this.$request.post('/reg',{
                // Headers:{},
                data: {
                    username:values.username,
                    password:values.password 
                    },
                }).then(({data})=>{
                console.log('data===', data);


                const result = data
                if(result.code === 200){
                    this.$toast('注册成功')
                    this.$router.push('/login')
                }

                
            })
        },
        
    },
}
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
