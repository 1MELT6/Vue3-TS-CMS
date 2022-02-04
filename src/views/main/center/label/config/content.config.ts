export const contentTableConfig = {
  title: '标签列表',

  propList: [
    { prop: 'name', label: '名称', minwidth: '100' },
    { prop: 'createAt', label: '创建时间', minwidth: '250' },
    { label: '操作', midwidth: 120, slotName: 'handler' }
  ],

  showSelectColumn: true,
  showIndexColumn: true
}
