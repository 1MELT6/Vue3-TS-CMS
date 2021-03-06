export const contentTableConfig = {
  title: '用户管理',

  propList: [
    { prop: 'name', label: '账号名', minwidth: '100' },

    {
      prop: 'createAt',
      label: '创建时间',
      minwidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minwidth: '250',
      slotName: 'updateAt'
    },
    { label: '操作', midwidth: 120, slotName: 'handler' }
  ],

  showSelectColumn: true,
  showIndexColumn: true
}
