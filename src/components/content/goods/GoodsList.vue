<template>
 <div class="goods">
   <GoodListItem v-for="item in goods" :goodsItem="item" :key="item.list"/>
 </div>
</template>

<script>
import GoodListItem from "./GoodsListItem"
export default {
  components:{
    GoodListItem
  },
  name:'GoodsList',
  props:{
    goods:{
      type: Array,
      default(){
        return []
      }
    }
  }
}

</script>
<style>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }


</style>