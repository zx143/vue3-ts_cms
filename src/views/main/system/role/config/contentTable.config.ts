/*
 * @Description:
 * @Date: 2021-10-10 20:28:56
 * @LastEditTime: 2021-10-13 07:41:02
 */
export const contentTableConfig = {
  title: '权限列表',
  propList: [
    { prop: 'name', label: '角色名', minWidth: 100 },
    { prop: 'intro', label: '权限介绍', minWidth: 150 },
    { prop: 'createAt', label: '创建时间', minWidth: 250, slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: 250, slotName: 'updateAt' },
    { label: '操作', minWidth: 200, slotName: 'operation' }
  ],
  columnAlign: 'center',
  showIndexColumn: true,
  showSelectColumn: false
}
