<template>
    <div>

        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="../assets/imgs/banner/1.jpg" style="width:100%;height:100%"></van-swipe-item>
            <van-swipe-item><img src="../assets/imgs/banner/2.jpg" style="width:100%;height:100%"></van-swipe-item>
            <van-swipe-item><img src="../assets/imgs/banner/3.jpg" style="width:100%;height:100%"></van-swipe-item>
        </van-swipe>
        
        <van-tabs v-model="active">
            <van-tab  v-for="item in titles" :key="item.title" :title="item.title">
                <div v-if="item.title=='正在热映'" >
                <van-card
                style="background:white;padding:15px;"
                v-for="item in hot" :key="item.id"
                
                >
                    <template #thumb style="witdh=100%">
                        <van-image
                            height="100%"
                            width="100%"
                            fit="cover"
                            :src="$request.baseUrl+item.poster"
                        />
                    </template>    
                    <template #title >
                        <p
                        style="font-size:16px;margin-top:12px" 
                        >{{item.name}}</p>
                        <!-- <span>{{$request.baseUrl+item.poster}}</span> -->
                    </template>
                    <template #desc>
                        <span
                        style="color: #797d82;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:190px"
                        >主演：{{item.director}} {{item.actors}}</span>
                        <span style="color: #797d82;display:block">
                            {{item.nation}} | {{item.runtime}}分钟
                        </span>
                    </template>
                    <template #footer >
                        <van-button size="mini" class="goupiao">购票</van-button>
                    </template>
                    
                </van-card>
                </div>
                <div v-if="item.title=='即将上映'" >
                <van-card
                style="background:white;padding:15px;"
                v-for="item in now" :key="item.id"
                
                >
                    <template #thumb style="witdh=100%">
                        <van-image
                            height="100%"
                            width="100%"
                            fit="cover"
                            :src="$request.baseUrl+item.poster"
                        />
                    </template>    
                    <template #title >
                        <p
                        style="font-size:16px;margin-top:12px" 
                        >{{item.name}}</p>
                        
                    </template>
                    <template #desc>
                        <span
                        style="color: #797d82;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:190px"
                        >主演：{{item.director}} {{item.actors}}</span>
                        <span style="color: #797d82;display:block">
                            {{item.nation}} | {{item.runtime}}分钟
                        </span>
                    </template>
                    <template #footer >
                        <van-button size="mini" class="goupiao">购票</van-button>
                    </template>
                    
                </van-card>
                </div>
                <van-divider />
            </van-tab>
        </van-tabs>
        
 
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {

    //电影
    name:'Home',
    data(){
        
        return {
            active:0,
            //tab切换的title
            titles:[
                {title:"正在热映"},
                {title:"即将上映"},
            ],
            
        }
    },
    computed:{
        hot(){
            return this.$store.state.hot.hot
        },
        now(){
            return this.$store.state.now.now
        },
    },
    created(){
        this.requestAllHot()
        this.requestAllNow()
    },
    methods:{
        ...mapMutations('hot',{
            updateHot:'updateHot',
        }),
        ...mapMutations('now',{
            updateNow:'updateNow',
        }),

        //请求全部hot
        requestAllHot(){
            this.$request.get('/hot/list').then(data=>{
            console.log("hot",data.data.data);
            
            // this.hot=data.data.data

            // 不设置命名空间
            // this.$store.commit('updateHot',data.data.data)

            // 设置命名空间后
            this.updateHot(data.data.data)
        })
        },
        //请求全部now
        requestAllNow(){
            this.$request.get('/now/list').then(data=>{
            console.log("now",data.data.data);

            // this.now=data.data.data

            // 不设置命名空间
            // this.$store.commit('updateNow',data.data.data)

            // 设置命名空间后
            this.updateNow(data.data.data)
        })
        }
    },
}
</script>
<style lang="scss" scoped>
.my-swipe{
    width: 100%;
    height: 210px;
    background: skyblue;
}
.goupiao{
    display: block;
    line-height: 25px;
    height: 25px;
    width: 50px;
    color: #ff5f16;
    box-sizing: border-box;
    border: 1px solid #ff5f16;
    font-size: 13px;
    text-align: center;
    border-radius: 2px;
    position: absolute;
    top:40%;
    right:25px

}

</style>