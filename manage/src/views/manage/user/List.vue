<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%" 
    @selection-change="selectItem">
        <el-table-column
      type="selection"
      width="55">
    </el-table-column>

        <el-table-column
      type="index"
      label="#"
      width="55">
        </el-table-column>

        <el-table-column
      type="expand"
      width="55">
        </el-table-column>

      <el-table-column prop="username" label="用户名">
          <template v-slot="{row}">
              <strong>{{row.username}}</strong>
          </template>
      </el-table-column>

      <el-table-column prop="regtime" label="注册时间" v-slot="{row}">
          {{formatDate(row.regtime)}}
      </el-table-column>
      <el-table-column label="操作" v-slot="{row}">
          <el-button type="primary" size="small" @click="editItem(row.id)">编辑</el-button>
          <el-button type="danger" size="small" @click="removeItem(row.id)">删除</el-button>
      </el-table-column>
    </el-table>
  
    <!-- <el-pagination

      :page-size="size"
      layout="total, prev, pager, next"
      :total="total"
    @current-change="pageChange"
      @size-change="sizeChange"
      >
    </el-pagination> -->

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
  name: "UserList",
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
        const {data} = await this.$request.get("/user/list");
        this.total = data.data.total
    },
    async getData() {
      const {data} = await this.$request.get("/user/list",{
          params:{
              page:this.page,
              size:this.size
          }
      })
        console.log('data.data=====>',data.data);
        this.tableData = data.data
        // this.tableData = data.data.result;
        // this.total = data.data.total
    },
    formatDate(date){
        return new Date(date).toLocaleDateString();
    },



    removeItem(id){
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
            // const data= this.deleteData(id)
           this.$request.delete('/user/'+id,{
            }).then(({data})=>{
              if(data.code==200){
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                this.$router.go(0)
            }
          })
            
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
            
        
    },

    
    editItem(id){
        // this.$router.push('/manage/user/edit/'+id)
        this.$router.push({
            name:'UserEdit',
            params:{id}
        })
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
};
</script>