<template>
    <div>
        <van-nav-bar title="影院"  left-arrow >
        <template #left>
            <van-icon name="arrow-left" size="26" @click="$router.back()" style="margin-right:5px;" />
        </template>
        <template #right>
            <van-icon name="search" size="26" />
        </template>
        </van-nav-bar>

        <van-dropdown-menu >
            <van-dropdown-item v-model="changetext" :options="option1"  @change="menuChange(changetext)"/>
            <van-dropdown-item v-model="value2" :options="option2" />
            <van-dropdown-item v-model="value3" :options="option3" />
        </van-dropdown-menu>

        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        >
        <van-cell  
        style="width: 100%;height: 45px;padding: 15px;"
        />
        <template #default>
            <div class="listItem" v-for="item in address" :key="item.id">
                <div class="left">
                    <span>{{item.name}}</span>
                    <span 
                    style="display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:260px"
                    >{{item.address}}</span>
                </div>
                <div class="right">
                    <span>{{(item.lowPrice*0.01).toFixed(1)}}起</span>
                    <span>{{item.districtName}}</span>
                </div>
            </div>
            
        </template>
        </van-list>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    //影院
    name:'Cinema',
    data(){
        return {
            //下拉菜单数据
            changetext: '全城',
            value2: 'a',
            value3: "A",
            option1: [
                { text: '全城', value: '全城' },
                { text: '越秀区', value: '越秀区'},
                { text: '海珠区', value: '海珠区'},
                { text: '天河区', value: '天河区'},
                { text: '荔湾区', value: '荔湾区'},
                { text: '番禺区', value: '番禺区'},
                { text: '白云区', value: '白云区'},
                { text: '花都区', value: '花都区'},
                { text: '黄埔区', value: '黄埔区'},
                { text: '南沙区', value: '南沙区'},
                { text: '萝岗区', value: '萝岗区'},
                { text: '增城区', value: '增城区'},
                { text: '从化区', value: '从化区'},
            ],
            option2: [
                { text: 'APP订票', value: 'a' },
                { text: '前台兑换', value: 'b' },
            ],
            option3: [
                { text: '最近去过', value: 'A' },
                { text: '离我最近', value: 'B' },
            ],
            

            
            loading: false,
            finished: false,

        }
    },
    computed:{
        address(){
            return this.$store.state.address.address
        }
    },
    created(){
        this.requestAllAddress()
    },
    methods: {
        ...mapMutations('address',{
            updateAddress:'updateAddress',
        }),
        menuChange(changetext){
            // console.log(changetext);
            if(changetext=='全城'){
                this.requestAllAddress()
            }else{
                this.requestSomeAddress(changetext)
            }
            
        },  
        //请求全部address
        requestAllAddress(){
            this.$request.get('/address/list').then(data=>{
            // console.log(data.data.data);

            // this.address=data.data.data

            // 不设置命名空间
            // this.$store.commit('updateAddress',data.data.data)
            
            // 设置命名空间后
            this.updateAddress(data.data.data)
            })
        }, 
        //按区域分类请求
        requestSomeAddress(dname){
            this.$request.get('/address/list',{
                params:{
                    districtName:dname,
                }
            }).then(data=>{
                // console.log(data.data.data);

                // this.address=data.data.data

                // 不设置命名空间
                // this.$store.commit('updateAddress',data.data.data)

                //设置命名空间后
                this.updateAddress(data.data.data)
            })
        },

  },
}
</script>
<style lang="scss" scoped>
.listItem{
    display: flex;
    padding:15px;
    border-bottom: 1px solid #ededed;
    .left{
        display: flex;
        flex-flow: column;
        width: calc(100% - 65px);
        overflow: hidden;
        span:nth-child(1){
            font-size: 15px;
        }
        span:nth-child(2){
            font-size: 12px;
            color: #797d82;
            margin-top:8px;
        }
    }
    .right{
        display: flex;
        width: 70px;
        text-align: center;
        flex-flow: column;
        span:nth-child(1)::before{
            content:'￥'
        }
        span:nth-child(1){
            font-size: 15px;
            color: #ff5f16;
            
        }
        span:nth-child(2){
            font-size: 12px;
            color: #797d82;
            margin-top:8px;
        }

    }
}
</style>