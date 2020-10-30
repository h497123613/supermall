<template>
 <div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
 </div>
</template>

<script>

import BScroll from "better-scroll"
export default {
  name:'Scroll',
  props:{
    probeType:{
      type: Number,
      default: 0
    },
    pullUpLoad:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      scroll: null
    }
  },
  mounted(){
    //创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      click: true,
      // pullUpLoad:3
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    //监听滚动的位置
    if(this.probeType ==2 || this.probeType == 3){
      this.scroll.on('scroll',position =>{
      this.$emit('scroll',position)
    })
    }
    
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
    }
    // this.scroll.refresh()
    //监听上拉事件
  },
  methods:{
    scrollTo(x,y,time=3000){//默认值3000ms
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    getScrollY(){
      return this.scroll.y ? this.scroll.y : 0
    }
  }
}

</script>
<style>
</style>