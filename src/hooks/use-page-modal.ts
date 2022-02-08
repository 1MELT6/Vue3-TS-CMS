import PageModal from '@/components/page-modal'
import { ref } from 'vue'

type CallbackFn = () => void

export function usePageModal(newCb: CallbackFn, editCb: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})

  const hanldeNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newCb && newCb()
  }
  const hanldeEditData = (item: any) => {
    // 保存编辑值
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    // 显示隐藏item在新建显示编辑隐藏等
    editCb && editCb()
  }
  return [pageModalRef, defaultInfo, hanldeNewData, hanldeEditData]
}
