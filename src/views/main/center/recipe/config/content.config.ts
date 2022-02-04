export const contentTableConfig = {
  title: '菜谱管理',

  propList: [
    { prop: 'name', label: '菜谱', minwidth: '100' },
    {
      prop: 'description',
      label: '描述',
      minwidth: '150'
    },
    {
      prop: 'pre_time',
      label: '准备时间',
      minwidth: '50'
    },
    {
      prop: 'work_time',
      label: '烹饪时间',
      minwidth: '50'
    },
    {
      prop: 'full_time',
      label: '总时间',
      minwidth: '50'
    },

    { prop: 'createAt', label: '创建时间', minwidth: '250' },
    { prop: 'updateAt', label: '更新时间', minwidth: '250' },
    { label: '操作', midwidth: 120, slotName: 'handler' }
  ],

  showSelectColumn: true,
  showIndexColumn: true
}
