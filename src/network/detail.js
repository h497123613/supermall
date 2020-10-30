import {request} from "./request"
export function getDetail(iid){
  return request({
    url: '/detail',
    params:{
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url:'/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title//标题
    this.desc = itemInfo.desc//说明
    this.newPrice = itemInfo.price//新价格
    this.oldPrice = itemInfo.oldPrice//旧价格
    this.discount = itemInfo.discountDesc//折扣说明
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns//
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}
