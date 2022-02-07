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
      label: '名称',
      placeholder: '请输入用户名'
    },
    {
      field: 'pre_time',
      type: 'input',
      label: '准备时间',
      placeholder: '请输入关键字描述'
    },
    {
      field: 'work_time',
      type: 'input',
      label: '工作时间',
      placeholder: '请输入关键字描述'
    },
    {
      field: 'full_time',
      type: 'input',
      label: '总时间',
      placeholder: '请输入关键字描述'
    }
  ]
}
