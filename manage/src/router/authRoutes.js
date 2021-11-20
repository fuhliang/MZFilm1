import Manage from '@/views/Manage.vue'

import Home from '@/views/manage/Home.vue'

import User from '@/views/manage/user/Default.vue'
import UserList from '@/views/manage/user/List.vue'
import UserAdd from '@/views/manage/user/Add.vue'
import UserEdit from '@/views/manage/user/Edit.vue'

import Address from '@/views/manage/address/Default.vue'
import AddressList from '@/views/manage/address/List.vue'
import AddressAdd from '@/views/manage/address/Add.vue'
import AddressEdit from '@/views/manage/address/Edit.vue'

export default {
    path:'/manage',
    name:'Manage',
    component:Manage,

    // 子路由（嵌套路由）
    children:[
        // 当浏览器地址匹配 /manage/home 时， 在Manage中的<router-view/>中渲染Home组件
        {
            path:'home',
            component:Home,
        },
        {
            path:'user',
            component:User,
            children:[
                {
                    path:'list',
                    component:UserList,
                },
                {
                    path:'add',
                    component:UserAdd,
                },
                {
                    path:'edit/:id',
                    name:'UserEdit',
                    component:UserEdit,
                },
            ]
        },
        // 商品
        {
            path:'address',
            component:Address,
            children:[
                {
                    path:'list',
                    component:AddressList,
                },
                {
                    path:'add',
                    component:AddressAdd,
                },
                {
                    path:'edit/:id',
                    component:AddressEdit,
                },
            ]
        },

    ]   
}

// router.addRoute('Manage',{
//     path:'user',
//     component:User
// })