export default {
    // 设置命名空间
    namespaced:true,
    state:{
        hot:[],
    },
    mutations:{
        updateHot(state,payload){
            state.hot=payload
        }
    }
}