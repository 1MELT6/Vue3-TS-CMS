export const contentTableConfig = {
  title: '菜谱管理',

  propList: [
    { prop: 'name', label: '菜谱', minwidth: '100' },
    {
      prop: 'description',
      label: '描述',
      minwidth: '100'
    },
    { prop: 'createAt', label: '创建时间', minwidth: '250' },
    { prop: 'updateAt', label: '更新时间', minwidth: '250' },
    { label: '操作', midwidth: 120, slotName: 'handler' }
  ],

  showSelectColumn: true,
  showIndexColumn: true
}
