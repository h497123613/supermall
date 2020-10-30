<template>
 <div class="wrapper" ref="aaa">
   <ul class="content">
     <li>韩博文1</li>
     <li>韩博文2</li>
     <li>韩博文3</li>
     <li>韩博文4</li>
     <li>韩博文5</li>
     <li>韩博文6</li>
     <li>韩博文7</li>
     <li>韩博文8</li>
     <li>韩博文9</li>
     <li>韩博文10</li>
   </ul>
 </div>
</template>

<script>
import BScroll from "better-scroll"

export default {
  name:'Category',
  data(){
    return {
      scroll: null
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.aaa,{
      probeType: 3,
      pullUpLoad: true
    })
    this.scroll.on('pullingUp',()=>{
      console.log('上拉加载更多');
    })
    // this.scroll.on('scroll',(position) =>{
    //   console.log(position);
    // })
  }
}

</script>
<style scoped>
  .wrapper{
    background-color: red;
    height:400px;
    overflow:hidden;
  }
</style>