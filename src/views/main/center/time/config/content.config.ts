export const contentTableConfig = {
  title: '标签列表',

  propList: [
    { prop: 'name', label: '名称', minwidth: '100' },
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
    { label: '操作', midwidth: 120, slotName: 'handler' }
  ],

  showSelectColumn: true,
  showIndexColumn: true
}
