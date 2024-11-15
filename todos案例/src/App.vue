<template>
    <div>
        <h2 class="first">Lei的Todo-list</h2>
        <div class="todo-container">
            <UserHeader :receive="receive"></UserHeader>
            <UserList 
            :checkId="checkId"
            :Todos="Todos"
            :deleteX="deleteX"
            >
            </UserList>
            <UserFooter :todos="Todos" 
            :totalNum="totalNum"
            :checkAll="checkAll"
            :clearAll="clearAll"
            ></UserFooter>
           
        </div>
    </div>
  </template>
  
  <script>
import UserHeader from './components/UserHeader';
import UserFooter from './components/UserFooter';
import UserList from './components/UserList';
  

  export default {
      name: 'App',
     components:{
        UserHeader,UserFooter,UserList
     },
     data() {
        return {
            Todos:JSON.parse(localStorage.getItem('Todos'))||[]
            // 这两个地方需要注意
        }
    },
   watch:{
    Todos:{
        handler(val){
            localStorage.setItem('Todos',JSON.stringify(val))
        },
        deep:true
    }

   },
    computed:{
        totalNum(){
            return this.Todos.filter(item=>{
               return item.done===true
            }).length
            // 直接一个计算属性

        }
    },
    methods:{
        //添加新增加的任务
        receive(x){
           this.Todos.unshift(x)
        },
        //控制选中的值选中为true，取消为false
        checkId(id){
            // 通知todos里面的id值取反
            this.Todos.forEach(item=>{
                if(item.id===id){
                    item.done=!item.done
                }
            })
        },
        //删除该数组的元素
        deleteX(id){
           this.Todos= this.Todos.filter(item=>{
                return item.id!=id
                //过滤掉是该item的id不等于传进来的id
            })
        },
        // 实现全选即全部勾选
        checkAll(done){
            this.Todos.forEach(item=>{
                item.done=done;
            })

        },
        //清除完成数组
        clearAll(){
            this.Todos=this.Todos.filter(item=>{
              return item.done===false  
            })

        }
    }
  }
  </script>
  <style>
   /* 页面基本样式 */
   body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
        }

        /* 待办事项容器样式 */
        .todo-container {
            width: 300px;
            background-color: #ffffff;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            border-radius: 8px;
        }
        .first{
            font-family: 'Arial', sans-serif; /* 或使用其他字体 */
            font-size: 2.5em; /* 字体大小 */
            color: palevioletred; /* 字体颜色 */
           text-align: center; /* 居中对齐 */
           margin-bottom: 20px; /* 下边距 */
           text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2); /* 文字阴影 */
           letter-spacing: 2px; /* 字母间距 */
            
            
        }

</style>
  