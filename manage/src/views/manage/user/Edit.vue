<template>
        <div>
            <el-descriptions title="用户信息" :column="1" border>
                <el-descriptions-item label="id" >{{item.id}}</el-descriptions-item>
                <el-descriptions-item label="用户名" >{{item.username}}</el-descriptions-item>
                <el-descriptions-item label="密码" >{{item.password}}</el-descriptions-item>
                <!-- <el-descriptions-item label="注册时间" >{{item.time}}</el-descriptions-item> -->
            </el-descriptions>

        <el-descriptions title="修改信息" :column="1" style="margin:20px">
        </el-descriptions>    
        <!-- <el-form-item label="id" prop="id">
            <el-input v-model="ruleForm.id" style="width:570px"></el-input>
        </el-form-item> -->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name" style="width:570px"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" style="width:570px"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即修改</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>

        </el-form>
        </div>
</template>
<script>
export default {
    name:'UserEdit',
       data() {
        return {
            item:{},

            ruleForm: {
            id:'',
            name: '',
            password:'',
            // lowPrice:'',
            
            },
            rules: {
            name: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
            ],

            password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
            ],
            
            },
            
        };
       },
    created(){
        const {id} = this.$route.params
        console.log('id',id);
        
        this.getItem(id)
    },
         methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              console.log(this.ruleForm);
            this.$message({
            showClose: true,
            message: '修改成功',
            type: 'success'
            });

            const data=this.updateDate(this.ruleForm)
            console.log("data",data);
            setTimeout(()=>{
                this.resetForm(formName)
                this.getItem(this.item.id)
            },3000)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      

      async getItem(id){
          this.$request.get('/user/'+id).then(({data})=>{
            console.log(data.data);
            this.item=data.data
            console.log(this.item);
        })
      },
      
      async updateDate(password,id){
        //   const {data}=await this.$request.put('/user/'+this.item.id,{password})
          const {data}=await this.$request.put('/user',{password,id})
        //   const {data}=await this.$request.put('/user/'+{form})
          console.log('this is the data',data);
          return data
      },
    }

}
</script>