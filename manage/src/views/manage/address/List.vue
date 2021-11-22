<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom:20px">
            <el-breadcrumb-item :to="{ path: '/manage/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>影院管理</el-breadcrumb-item>
            <el-breadcrumb-item>影院列表</el-breadcrumb-item>
        </el-breadcrumb>

    <el-table :data="tableData" stripe style="width: 100%" @selection-change="selectItem">
        <!-- <el-table-column
      type="selection"
      width="55">
    </el-table-column> -->
        <el-table-column prop="id" label="id" width="55" v-slot="{row}">
            {{row.id}}
        </el-table-column>
        <!-- <el-table-column
      type="expand"
      width="55">
        </el-table-column> -->
      <el-table-column prop="name" label="影院名">
          <template v-slot="{row}">
              <strong>{{row.name}}</strong>
          </template>
      </el-table-column>
      <el-table-column prop="address" label="影院地址" v-slot="{row}">
          {{row.address}}
      </el-table-column>
      <el-table-column prop="districtName" label="分区" v-slot="{row}">
          {{row.districtName}}
      </el-table-column>
      <el-table-column prop="lowPrice" label="起步价格" v-slot="{row}">
          {{row.lowPrice*0.01}}
      </el-table-column>
      <el-table-column label="操作" v-slot="{row}">
          <el-button type="primary" size="small" @click="editItem(row.id)">编辑</el-button>
          <el-button type="danger" size="small" @click="removeItem(row.id)">删除</el-button>
      </el-table-column>
    </el-table>
    <el-pagination
       style="text-align:center"
      :page-size="size"
      layout="total, prev, pager, next,sizes"
      :total="total"
    @current-change="pageChange"
    @size-change="sizeChange"
      >
    </el-pagination>
  </div>
</template>
<script>
export default {
    name:'AddressList',
    data(){
      return {
          tableData:[],
        total:0,
        size:10,
        page:1,
      }
  },
  
  created() {
      this.getTotal()
      this.getData();
  },
  methods: {
    async getTotal(){
        const {data} = await this.$request.get("/address/list");
        this.total = data.data.length
    },
    async getData() {
      const {data} = await this.$request.get("/address/list",{
          params:{
              page:this.page,
              size:this.size
          }
      });
        console.log(data.data);
        this.tableData = data.data;
        
    },
    async deleteData(id){
        const {data}=await this.$request.delete('/address/'+id)
        return data
    },
    
    removeItem(id){
        
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
            const data= this.deleteData(id)
            if(data){
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                })
                this.$router.go(0)
            }
          

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        
    },
    editItem(id){
        this.$router.push('/manage/address/edit/'+id)
        console.log(id);
        // this.$router.push({
        //     name:'AddressEdit',
        //     params:id
        // })
    },
    selectItem(selection){
        console.log('selection',selection)
    },
    pageChange(pageNum){
        this.page = pageNum;

        this.getData();
    },
    sizeChange(size){
        this.size=size
        this.getData()
    },
  },
}
</script>