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

        <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
            <van-dropdown-item v-model="value3" :options="option3" />
        </van-dropdown-menu>

        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
        <van-cell v-for="item in list" :key="item" :title="item" 
        style="width: 100%;height: 45px;padding: 15px;"
        />
        <template #default>
            <div class="listItem">
                <div class="left">
                    <span>广州嘉莱影乐汇</span>
                    <span>广州市白云区白云大道北880号安华汇六层</span>
                </div>
                <div class="right">
                    <span>24.9起</span>
                    <span>0.5km</span>
                </div>
            </div>
            
        </template>
        </van-list>
    </div>
</template>
<script>
export default {
    //影院
    name:'Cinema',
    data(){
        return {
            //下拉菜单数据
            value1: 0,
            value2: 'a',
            value3: "A",
            option1: [
                { text: '全城', value: 0 },
                { text: '白云区', value: 1 },
            ],
            option2: [
                { text: 'APP订票', value: 'a' },
                { text: '前台兑换', value: 'b' },
            ],
            option3: [
                { text: '最近去过', value: 'A' },
                { text: '离我最近', value: 'B' },
            ],
            

            //list数据
            list: [],
            loading: false,
            finished: false,

        }
    },
    methods: {
    // onLoad() {
    //   // 异步更新数据
    //   // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    //   setTimeout(() => {
    //     for (let i = 0; i < 10; i++) {
    //       this.list.push(this.list.length + 1);
    //     }

    //     // 加载状态结束
    //     this.loading = false;

    //     // 数据全部加载完成
    //     if (this.list.length >= 40) {
    //       this.finished = true;
    //     }
    //   }, 1000);
    // },

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