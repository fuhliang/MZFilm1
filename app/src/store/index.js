import Vue from 'vue'
import Vuex from 'vuex'

import hot from './hot'
import now from './now'
import address from './address'

// 2. 安装vuex插件
Vue.use(Vuex)



// 3. 实例化一个数据仓库store
const store  = new Vuex.Store({
    
    state:{
       
        
    },
    getters:{
        
    },
    
    mutations:{
        

       
    },

    
    actions:{
        
    },

   
    modules:{
        hot,
        now,
        address,
    }
})
// console.log("store",store);

export default store;