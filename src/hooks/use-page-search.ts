/*
 * @Description:
 * @Date: 2021-10-16 15:30:21
 * @LastEditTime: 2021-10-16 15:35:38
 */
import { ref } from 'vue'
import PageContentTable from '@/components/page-content'

export function usePageSearch() {
  const pageContentTableRef = ref<InstanceType<typeof PageContentTable>>()
  const handleSearch = (searchInfo: any) => {
    pageContentTableRef.value?.getPageData(searchInfo)
  }
  const handleReset = () => {
    pageContentTableRef.value?.getPageData()
  }

  return [pageContentTableRef, handleSearch, handleReset]
}
