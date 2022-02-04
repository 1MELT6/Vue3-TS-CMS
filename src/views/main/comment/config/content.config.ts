export const contentTableConfig = {
  title: '评论列表',

  propList: [
    { prop: 'name', label: '用户名', minwidth: '100' },
    {
      prop: 'rec_name',
      label: '菜谱名',
      minwidth: '100'
    },
    { prop: 'content', label: '评论内容', minwidth: '100' },

    { prop: 'createAt', label: '创建时间', minwidth: '250' },
    { label: '操作', midwidth: 120, slotName: 'handler' }
  ],

  showSelectColumn: true,
  showIndexColumn: true
}
