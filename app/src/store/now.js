export default {
    // 设置命名空间
    namespaced:true,
    state:{
        now:[],
    },
    mutations:{
        updateNow(state,payload){
            state.now=payload
        }
    }
}