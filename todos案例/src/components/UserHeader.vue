<template>
    <!-- 头部 -->
  <input type="text" class="todo-input" placeholder="请输入你的任务名称，按回车键确认" @keydown.enter="addNews">
  
</template>

<script>
 import { nanoid } from 'nanoid';//引入nanoid包
export default {
  name:'UserHeader',
  props:['receive'],
  methods:{
    addNews(e){
      // 每次输出就添加一个对象信息
      const newObj={
        id:nanoid(),
        name:e.target.value,//注意这儿的对象属性值是个变量所以不用加单引号
        done:false}
        this.receive(newObj)
        e.target.value=''
    },
    //使用传过来的receive函数
  }

}
</script>

<style scoped>
  /*头部  输入框样式 */
  .todo-input {
            width: 100%;
            padding: 10px;
            border: 1px solid #d0d4da;
            border-radius: 5px;
            font-size: 14px;
            margin-bottom: 15px;
            box-sizing: border-box;
        }
</style>