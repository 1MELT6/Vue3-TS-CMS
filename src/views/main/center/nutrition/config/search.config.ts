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
      placeholder: '请输入菜谱名称'
    },
    {
      field: 'protein',
      type: 'input',
      label: '蛋白质',
      placeholder: '请输入菜谱名称'
    },
    {
      field: 'fat',
      type: 'input',
      label: '脂肪',
      placeholder: '请输入菜谱名称'
    },
    {
      field: '碳水化合物',
      type: 'input',
      label: '碳水化合物',
      placeholder: '请输入菜谱名称'
    },
    {
      field: 'calories',
      type: 'input',
      label: '卡路里',
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
