<template>
  <div >
    <!-- <StudentName></StudentName>
   <SchoolName  @lei="deliver" ref="school"></SchoolName>
    //自定义事件绑定的第一种方法
   <SchoolName  ref="school"></SchoolName> -->
   <!-- 第二个问题，很容易在字母拼写上写错 -->
    <my-test-vue></my-test-vue>
  </div>
</template>

<script>
// import StudentName from './components/StuentName.vue';
// import SchoolName from './components/SchoolName.vue';
import MyTestVue from './components/MyTest.vue';
export default {
    // comments:{StudentName,SchoolName}
    // 自己的第一个错误，组件很容易写错
  //   components:{
  //     StudentName,SchoolName
  //   },
  //   methods:{
  //     deliver(){
  //       console.log('App传来了一个信息!');
  //     }
  //   },
  //   // 第二种写法：
  //  mounted(){
  //   this.$refs.school.$on('lei',this.deliver)
  //  }
  components:{MyTestVue}
    


}
</script>

<style>
</style>