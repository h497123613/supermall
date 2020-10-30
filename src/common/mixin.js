import {debouce} from "common/utils"
import BackTop from "components/content/backTop/BackTop";
export const itemListenerMixin = {
  data(){
    return{
      itemImgListener: null,
      refresh: null
    }
  },
  mounted(){
    this.refresh = debouce(this.$refs.scroll.refresh, 200)
    this.detailItemListener = () =>{
      this.refresh()
    }
    this.$bus.$on('itemImgLoad',this.detailItemListener)
  }
}

export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return {
      isShowBackTop: false,
    }
  },
  methods:{
    backTop(){
      this.$refs.scroll.scrollTo(0,0,300)
    },
    listenShowBackTop(position){
      this.isShowBackTop = Math.abs(position.y) > 1000
    }
  }
}