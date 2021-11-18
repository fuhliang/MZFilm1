<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
        </van-swipe>
        
        <van-tabs v-model="active">
            <van-tab  v-for="item in titles" :key="item.title" :title="item.title">
                <van-card
                style="background:white;padding:15px 15px 15px 0;"
            
                thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
                >
                    <template #title >
                        <p
                        style="font-size:16px;margin-top:12px" 
                        >铁道英雄</p>
                    </template>
                    <template #desc>
                        <span
                        style="color: #797d82;display:inline-block"
                        >主演：杨枫 张涵予 范伟 魏晨 周也</span>
                        <span style="color: #797d82;display:inline-block">
                            中国大陆 | 123分钟
                        </span>
                    </template>
                    <template #footer >
                        <van-button size="mini" class="goupiao">购票</van-button>
                    </template>
                    
                </van-card>
                <van-divider />
            </van-tab>
        </van-tabs>
        
    </div>
</template>
<script>
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
            ]
        }
    }
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