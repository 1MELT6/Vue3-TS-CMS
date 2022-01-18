export const contentTableConfig = {
  title: '用户类别',

  propList: [
    { prop: 'name', label: '账号名', minwidth: '100' },
    {
      prop: 'password',
      label: '密码',
      minwidth: '100',
      slotName: 'password'
    },
    { prop: 'createAt', label: '创建时间', minwidth: '250' },
    { prop: 'updateAt', label: '更新时间', minwidth: '250' },
    { label: '操作', midwidth: 120, slotName: 'handler' }
  ],

  showSelectColumn: true,
  showIndexColumn: true
}
