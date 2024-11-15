<template>
     <div>
        <div class="todo-item" v-for="todo in Todos" :key="todo.id">
            <input type="checkbox" class="todo-checkbox" :checked="todo.done" @click="showId(todo.id)">
            <!-- 注意一定不要利用bug去修改props传来的值 -->
            <span :class="{'completed':todo.done}" >{{ todo.name }}</span>
            <!-- 注意这儿的表达式，我们动态绑定class，当todo.done为真的时候，添加completed样式 -->
            <!-- 我们等哈进行一下动态绑定完成了的样式
             我们要实现的目标是：当todo.done结果为真的时候，样式出现改变
             
            -->
             <button class="List-delete" @click="Listdelete(todo.id)">删除</button>
        </div>
     </div> 
</template>
<script>
export default {
    name:'UserList',
    props:['Todos','checkId','deleteX'],
    methods:{
        showId(id){
            this.checkId(id);
        },
        Listdelete(id){
            if(confirm('确认删除该任务吗?')) this.deleteX(id)               
        }
    }
}
</script>

<style>
.todo-item {
            display: flex;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid #f0f0f0;
            
        }

        .todo-item:last-child {
            border-bottom: none;
        }

        /* 复选框样式 */
        .todo-checkbox {
            margin-right: 10px;
        }
        .completed {
        text-decoration: line-through;
        color: gray;
}
.List-delete{
    margin-left:auto;
    /* 使 .List-delete 自动填充左侧空间，将其推到最右边。 */
    padding: 5px 10px;
    border-radius: 5px;
    background-color: tomato;
    border: 1px solid tomato;
}
.List-delete:hover{
    cursor: pointer;
}


</style>