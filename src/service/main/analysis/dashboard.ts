import gqRequest from '@/service'
import { IDataType } from '@/service/types'

enum EDashboardService {
  CATEGORY_GOODS_COUNT = '/goods/category/count',
  CATEGORY_GOODS_SALE = '/goods/category/sale',
  CATEGORY_GOODS_FAVOR = '/goods/category/favor',
  ADDRESS_GOODS_SALE = '/goods/address/sale'
}

export const getCategoryGoodsCount = () => {
  return gqRequest.get<IDataType>({
    url: EDashboardService.CATEGORY_GOODS_COUNT
  })
}
export const getCategoryGoodsSale = () => {
  return gqRequest.get<IDataType>({
    url: EDashboardService.CATEGORY_GOODS_SALE
  })
}
export const getCategoryGoodsFavor = () => {
  return gqRequest.get<IDataType>({
    url: EDashboardService.CATEGORY_GOODS_FAVOR
  })
}
export const getAddressGoodsSale = () => {
  return gqRequest.get<IDataType>({
    url: EDashboardService.ADDRESS_GOODS_SALE
  })
}
