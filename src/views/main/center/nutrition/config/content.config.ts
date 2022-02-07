export const contentTableConfig = {
  title: '菜谱管理',

  propList: [
    { prop: 'name', label: '菜谱', minwidth: '100' },
    {
      prop: 'protein',
      label: '蛋白质',
      minwidth: '100'
    },
    {
      prop: 'fat',
      label: '脂肪',
      minwidth: '100'
    },
    {
      prop: 'carbohydrates',
      label: '碳水化合物',
      minwidth: '100'
    },
    {
      prop: 'calories',
      label: '卡路里',
      minwidth: '100'
    },
    // {
    //   prop: 'createAt',
    //   label: '创建时间',
    //   minwidth: '250',
    //   slotName: 'createAt'
    // },
    // {
    //   prop: 'updateAt',
    //   label: '更新时间',
    //   minwidth: '250',
    //   slotName: 'updateAt'
    // },
    { label: '操作', midwidth: 120, slotName: 'handler' }
  ],

  showSelectColumn: true,
  showIndexColumn: true
}
