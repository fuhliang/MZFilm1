export default {
    // 设置命名空间
    namespaced:true,
    state:{
        address:[],
    },
    mutations:{
        updateAddress(state,payload){
            state.address=payload
        }
    }
}