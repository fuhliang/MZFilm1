<template>
    <div class="app">
        
        <div class='minetop'>
            <div class="logo">
               <img src="https://img01.yzcdn.cn/vant/cat.jpeg" alt="" > 
            </div>
            
            <div class="login">
                <p style="color:white" @click="gotologin">立即登录</p>
            </div>
            
        </div>
        <van-grid clickable :column-num="2">
            <!-- <van-icon name="coupon" /> -->
            <van-grid-item icon="coupon-o" text="电影订单" to="/" />
            <van-grid-item icon="orders-o" text="商品订单" url="/vant/mobile.html" />
        </van-grid>

        <div class="conent">
          <ul >
            <li v-for="item in items" :key="item.name">
                <van-icon name='item.icon'/>
                <p>{{item.name}}</p>
            </li>
          </ul>  
        </div>
        

    </div>
</template>
<script>
export default {
    //我的
    name:'Mine',
  data(){
    return {
        items:[
            {
                icon:'coupon-o',
                name:'卖座劵'
            },
            {
                icon:'coupon-o',
                name:'组合红包'
            },
            {
                icon:'coupon-o',
                name:'余额'
            },
            {
                icon:'coupon-o',
                name:'设置'
            },
        ]
    }
  },
    methods:{
        gotologin(){
            this.$router.push('/login')
        }
    }
}
</script>
<style scoped>
/* .app{
    background-color: #e6e0e0;
} */
.minetop{
    background-image: url('https://assets.maizuo.com/h5/v5/public/app/img/bg.a5bdd690.png');
    height: 180px;
}
.logo{
    width: 100px;
    height: 100%;
    float: left;
    margin-right: 20px;
}
.logo img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-top: 48px;
    margin-left: 16px;
    /* float: left; */
}
.login{
    box-sizing: border-box;
    float: left;
    width: 70px;
    margin-top: 54px;
}
.conent{
    height: 350px;
    background-color: #F4F4F4;
}
ul{
    background-color: white;
    height: 150px;
}
ul li{
    height: 36px;

}
ul li p{
    display: inline-block;
    margin-left: 12px;
}
</style>