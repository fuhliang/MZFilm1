<template>
    <div class="app">
        
        <div class='minetop'>
            <div class="logo">
               <img src="../assets/imgs/mine/cat.jpeg" alt="" > 
            </div>
            
            <div class="login">
                <!-- <p style="color:white" @click="gotologin" >立即登录</p> -->
                <p style="color:white" @click="gotologin" >{{this.name ? this.name : '立即登录'}} </p>
                <span @click="logout"> {{this.name ? '退出登录' : ' '}}</span>
            </div>
            
        </div>
        <div class="order">
            <van-grid clickable :column-num="2">
                <!-- <van-icon name="coupon" /> -->
                <van-grid-item icon="coupon-o" text="电影订单" />
                <van-grid-item icon="orders-o" text="商品订单" />
            </van-grid>
        </div>


        <div class="conent">
          <ul >
            <li v-for="item in items" :key="item.name">
                <span class="icon">
                    <van-icon name="balance-pay" size="25" color="#ee0a24" />
                    <!-- {{item.icon}} -->
                </span>
                <p>{{item.name}}</p>
                <p class="ricon">
                  <van-icon name="arrow" size="10" />  
                </p>
                
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
            // name:{satte:'立即登录'},
            name:'',
            items:[
                {
                    icon:"cash-on-deliver" ,
                    name:'卖座劵'
                },
                {
                    icon:'cash-on-deliver',
                    name:'组合红包'
                },
                {
                    icon:'coupon-o',
                    name:'余额',
                    money:'10'
                },
                {
                    icon:'coupon-o',
                    name:'设置'
                },
            ],
            
        }
    },
    created(){
        if(localStorage.getItem('userInfo')){    
            let {username} = JSON.parse(localStorage.getItem('userInfo'))
            console.log('username  >',{username});
            this.name = username
            console.log(this);
        }

    },
    methods:{
        gotologin(){
            this.$router.push('/login')
        },
        logout(){
            let {username} = JSON.parse(localStorage.getItem('userInfo'))
            console.log('username===>',username);
            if(username){
                window.localStorage.removeItem('userInfo')
                this.$router.go(0)
            }
        }

    }
}
</script>
<style scoped>
.ricon{
    float: right;
    margin: 0 auto;
    margin-top: 17px;    margin-right: 17px;
}
.order{
    height: 96px;
    background-color:#F4F4F4 ;
}
.icon{
    display: inline-block;
    margin: 0px 20px;
    margin-top: 16px;
}
.minetop{
    background-image: url('../assets/imgs/mine/background.png');
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
    /* margin-top: 10px; */
}
ul li{
    height: 36px;
    

}
ul li p{
    display: inline-block;
}
</style>