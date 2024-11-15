<template>
  <div class="item2">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click="Getnews">点我接受兄弟的信息</button>
  </div>
</template>

<script>
export default {
    name:'StudentName',
    data() {
      return {
        name:'黄磊',
        sex:'男'
      }
    },
    methods:{
      Getnews(){
        this.$bus.$emit('lei',this.name) 
        // 额，没有问题，


      }
    }

}
</script>

<style>
.item2{
    background-color: pink;
    margin-bottom: 20px;
    
}

</style>