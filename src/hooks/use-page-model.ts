/*
 * @Description:
 * @Date: 2021-10-19 07:58:32
 * @LastEditTime: 2021-10-19 21:39:04
 */
import { ref } from 'vue'
import PageModel from '@/components/page-model'
type CallBackFn = () => void
export function usePageModel(newCallBack?: CallBackFn, editCallBack?: CallBackFn) {
  const pageModelRef = ref<InstanceType<typeof PageModel>>()
  const defaultInfo = ref({})

  const newBtnClick = () => {
    defaultInfo.value = {}
    newCallBack && newCallBack()
    if (pageModelRef.value) {
      pageModelRef.value.pageDialogVisible = true
    }
  }
  const editBtnClick = (item: any) => {
    defaultInfo.value = { ...item }
    editCallBack && editCallBack()
    if (pageModelRef.value) {
      pageModelRef.value.pageDialogVisible = true
    }
  }
  return [pageModelRef, defaultInfo, newBtnClick, editBtnClick]
}
