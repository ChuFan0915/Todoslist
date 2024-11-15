<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition>
        <h1 v-show="isShow" >今天是十一月10号</h1>
    </transition>
    <transition>
        <h1 v-show="isShow" >今天是十一月10号</h1>
    </transition>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isShow:'true'
        }
    },

}
</script>

<style>
h1{
    background-color: skyblue;
}
/* 原生动画 */

@keyframes lei{
    0%{
        transform: translateX(-100%);
        /* 从左边移动过来 */
    }
    100%{
        transform: translateX(0);
    }
}
/* 走 */
.v-enter-active{
    animation: lei 0.5s ease-in;
}
/* 离开 */
.v-leave-active{
    animation: lei 0.5s ease-in reverse;
}
/* 两个按钮，直接来控制 */


</style>