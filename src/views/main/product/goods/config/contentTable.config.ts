/*
 * @Description:
 * @Date: 2021-10-10 20:28:56
 * @LastEditTime: 2021-10-16 17:59:53
 */
export const contentTableConfig = {
  title: '商品列表',
  propList: [
    { prop: 'name', label: '商品名称', minWidth: 100 },
    { prop: 'oldPrice', label: '原价格', minWidth: 100, slotName: 'priceUnit' },
    { prop: 'newPrice', label: '现价格', minWidth: 100, slotName: 'priceUnit' },
    { prop: 'imgUrl', label: '商品图片', minWidth: 100, slotName: 'img' },
    { prop: 'status', label: '状态', minWidth: 100, slotName: 'status' },
    { prop: 'createAt', label: '创建时间', minWidth: 250, slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: 250, slotName: 'updateAt' },
    { label: '操作', minWidth: 200, slotName: 'operation' }
  ],
  columnAlign: 'center',
  showIndexColumn: true,
  showSelectColumn: true
}
