<template>
 <div v-if="Object.keys(detailInfo).length !== 0 " class="detail-goods-info">
   <div class="info-desc clear-fix">
     <div class="start"></div>
     <div class="desc">{{detailInfo.desc}}</div>
     <div class="end"></div>
   </div>
   <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
   <div class="info-list">
     <img v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imageLoad">
   </div>
 </div>
</template>

<script>
export default {
  name:'DetailGoodsInfo',
  data(){
    return {
      counter: 0,
      imagesLength: 0
    }
  },
  props:{
    detailInfo:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imageLoad(){
      this.$emit('detailImageLoad')
    }
    // imgLoad(){
    //   if(++this.counter == this.imagesLength){
    //     this.$emit('imageLoad')
    //   }
    // }
  },
  watch:{
    detailInfo(){
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
}

</script>
<style scpoed>
.detail-goods-info{
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc{
  padding: 0 15px;
}

.info-desc .start, .info-desc .end{
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.info-desc .start{
  float: left;
}

.info-desc .end{
  float: right;
}

.info-desc .strt::before, .info-desc .end::after{
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.info-desc .end::after{
  right: 0;
}

.info-desc .desc{
  padding: 15px 0;
  font-size: 14px;
}

.info-key{
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}

.info-list img{
  width: 100%;
}
  /* .goods-info{
    padding:2px;
    border-bottom: 5px solid #f2f5f8;
  } */
  /* #detail_goods_info {
  font-size: 0.68rem;
} */
/* .info-desc {
  font-size: 0.6rem;
  padding: 0.42rem 0.34rem;
}
.start {
  width: 3.5rem;
  height: 0.04rem;
  background-color: gray;
  position: relative;
}
.desc_dot {
  position: absolute;
  top: -0.1rem;
  display: inline-block;
  width: 0.21rem;
  height: 0.21rem;
  background-color: black;
  border-radius: 50%;
}
.desc {
  padding: 0.85rem 0;
  color: gray;
}
.info-key {
  padding: 0.42rem 0.34rem;
}
.info-list img {
  width: 100%;
} */
</style>