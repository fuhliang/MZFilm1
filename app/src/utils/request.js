import axios from 'axios'

<<<<<<< HEAD
// const baseUrl = 'http://10.3.136.149:2108/api/hot/list'
const baseUrl = 'http://localhost:2108'

=======
const baseUrl = 'http://10.3.136.149:2108'
>>>>>>> 11046f35213123e51dc1f6283414b3b3acbb3adf

// 创建axios实例，实例拥有与axios几乎一致的方法
// 我们可以在创建实例时配置自定义参数
const instance=axios.create({
    // 基础路径，任何请求都基于该地址发出
    baseURL:baseUrl+'/api',
    
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},

})

instance.baseUrl=baseUrl

export default instance