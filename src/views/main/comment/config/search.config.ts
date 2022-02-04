import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  itemLayout: {
    padding: '10px 40px'
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名称',
      placeholder: '请输入用户名'
    },
    {
      field: 'rec_name',
      type: 'input',
      label: '菜谱名称',
      placeholder: '请输入菜谱名称'
    },
    {
      field: 'content',
      type: 'input',
      label: '评论内容',
      placeholder: '请输入关键字描述'
    },

    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
