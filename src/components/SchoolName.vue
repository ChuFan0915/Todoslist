<template>
  <div>
    <h2>学校姓名:{{ name }}</h2>
    <h2>学校位置:{{ location }}</h2>
    <!-- <button @click="showNews">点我接受自定义信息</button>
    <button @click="unbind">点我解绑信息</button> -->
  </div>
</template>

<script>
export default {
    name:'SchoolName',
    data() {
      return {
        name:'吉利学院',
        location:'四川成都'
      }
    },
    // methods:{
    //   showNews(){
    //     this.$emit('lei',this.name)
    //   },
    //   unbind(){
    //     this.$off('lei')
    //     // 配置多个解绑的话，需要利用数组的形式来放值
    //   }
    // }
  //  mounted:{
  //   this.$bus.$on('lei',(data)=>{
  //     console.log('我是school组件收到了',data);

  //   })
  //  },
  mounted(){
    this.$bus.$on('lei',(data)=>{
      console.log('school收到了信息',data);
    })
  }

    
}
</script>

<style>
div{
    background-color: gray;
    
}

</style>