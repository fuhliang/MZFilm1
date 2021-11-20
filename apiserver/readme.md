# 接口用法
## ip地址:http://10.3.136.129:2108/

## 用户

### 增加用户

    *post请求
    *接口地址:api/user
    *请求体传参
    *请求参数:{  
                username:xxx,
                password:xxx,
             }
    
### 删除用户


#### 删除单个 
    *delete请求
    *接口地址:api/user/id名
    *动态路由传参
    *请求参数:id名

#### 批量删除
    *delete请求
    *接口地址:api/user/list?removelist=[86,87]
    *请求头传参
    *请求参数:removelist=[id,id,id]

#### 删除全部
    *delete请求
    *接口地址:api/user/list
    *请求头传参
    *请求参数:无

### 修改用户信息
    *put请求
    *接口地址:api/user
    *请求体传参
    *请求参数:{  
                password:xxx,
                id:id名
             }

### 查询用户
    *get请求
    *接口地址:api/user/list
    *请求头传参
    *请求参数:
        *page:从第几个查询
        *size:显示几个
        *order:根据参数升降序排序,1为升序,0为降序(例:order=id,0)
        *animeclass:输入任意关键字查询

### 查询单个用户
    *get请求
    *接口地址:api/user/id名
    *动态路由传参
    *请求参数:id
