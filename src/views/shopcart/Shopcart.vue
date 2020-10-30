<template>
 <div class="cart">
   <!-- 导航 -->
   <nav-bar class="nav-bar">
     <div slot="center">购物车({{length}})</div>
   </nav-bar>
   <!-- 商品列表 -->
    <cart-list/>
   <!-- 底部汇总 -->
 </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import CartList from "./childComps/CartList"
import { mapGetters } from "vuex"
export default {
  name:'ShopCart',
  components:{
    NavBar,
    CartList
  },
  computed:{
    //两种语法
    // ...mapGetters(['cartLength','cartList'])
    ...mapGetters({
      length: 'cartLength'
    })

    // cartLength(){
    //   return this.$store.getters.cartLength
    // }
    // cartLength(){
    //   return this.$store.state.cartList.length
    // }
  }
}

</script>
<style scoped>
  .cart{
    height: 100vh;
  }
  .nav-bar{
    background-color: pink;
    color: #fff;
  }
</style>