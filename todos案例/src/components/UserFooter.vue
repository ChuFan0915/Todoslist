<template>
  <div>
    <div class="todo-footer">
             <input type="checkbox"  :checked="isAll" @click="selectAll"> <span>已完成{{ totalNum }}</span>            <span>/ 全部 {{ todos.length }}</span>
            <button class="btn" @click="clearAll()">清除已完成的任务</button>
        </div>
  </div>
</template>

<script>
export default {
    name:'UserFooter',
    props:['todos','totalNum','checkAll','clearAll'],
    computed:{
      isAll(){
        return this.totalNum===this.todos.length && this.todos.length>0
      }
    },
    methods:{
      selectAll(e){
        this.checkAll(e.target.checked)
        //?
      }
    }

}
</script>

<style>
 .todo-footer {
            padding-top: 10px;
            font-size: 14px;
            color: #333;
            display: flex;
            justify-content: space-between;
        }
.btn{
  padding: 5px 10px;
  background-color: tomato;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.btn:hover{
  cursor: pointer;
}
.todo-footer span{
  position: relative;
  margin-top: 5px;
 
  

}
</style>