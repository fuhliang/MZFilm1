<template>
    <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="影院名" prop="name">
    <el-input v-model="ruleForm.name" style="width:570px"></el-input>
  </el-form-item>
  <el-form-item label="影院地址" prop="address">
    <el-input v-model="ruleForm.address" style="width:570px"></el-input>
  </el-form-item>
  <el-form-item
    label="起步价格"
    prop="lowPrice"
    :rules="[
      { required: true, message: '不能为空'},
      { type: 'number', message: '必须为数字值'}
    ]"
  >
    <el-input type="age" v-model.number="ruleForm.lowPrice" autocomplete="off" style="width:217px"></el-input>
  </el-form-item>
  <el-form-item label="分区" prop="districtName">
    <el-select v-model="ruleForm.districtName" placeholder="请选择分区">
      
      <el-option label="全城" value="全城"></el-option>
      <el-option label="越秀区" value="越秀区"></el-option>
      <el-option label="海珠区" value="海珠区"></el-option>
      <el-option label="天河区" value="天河区"></el-option>
      <el-option label="荔湾区" value="荔湾区"></el-option>
      <el-option label="番禺区" value="番禺区"></el-option>
      <el-option label="白云区" value="白云区"></el-option>
      <el-option label="花都区" value="花都区"></el-option>
      <el-option label="黄埔区" value="黄埔区"></el-option>
      <el-option label="南沙区" value="南沙区"></el-option>
      <el-option label="萝岗区" value="萝岗区"></el-option>
      <el-option label="增城区" value="增城区"></el-option>
      <el-option label="从化区" value="从化区"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>

</el-form>
    </div>
</template>
<script>
export default {
    name:'AddressAdd',
    data() {
      return {
        ruleForm: {
          name: '',
          address:'',
          lowPrice:'',
          
        },
        rules: {
          name: [
            { required: true, message: '请输入影院名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请输入影院地址', trigger: 'blur' },
            { min: 3, max: 30, message: '长度在 3 到 30 个字符', trigger: 'blur' }
          ],
          districtName: [
            { required: true, message: '请选择分区', trigger: 'change' }
          ],
          
        },
        // option1: [
        //         { text: '全城', value: '全城' },
        //         { text: '越秀区', value: '越秀区'},
        //         { text: '海珠区', value: '海珠区'},
        //         { text: '天河区', value: '天河区'},
        //         { text: '荔湾区', value: '荔湾区'},
        //         { text: '番禺区', value: '番禺区'},
        //         { text: '白云区', value: '白云区'},
        //         { text: '花都区', value: '花都区'},
        //         { text: '黄埔区', value: '黄埔区'},
        //         { text: '南沙区', value: '南沙区'},
        //         { text: '萝岗区', value: '萝岗区'},
        //         { text: '增城区', value: '增城区'},
        //         { text: '从化区', value: '从化区'},
        // ],
      };
    },
     methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            
            console.log(this.ruleForm);

            this.$message({
            showClose: true,
            message: '添加成功',
            type: 'success'
            });
            const data=this.addData(this.ruleForm)
            
            console.log("data",data);
            setTimeout(()=>{
                this.resetForm(formName)
                
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
      async addData(form){
          const {data}=await this.$request.post('/address',{form})
          return data
      },
      
    }
}
</script>