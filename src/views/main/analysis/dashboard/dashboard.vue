<template>
  <div class="dashboard">
    <el-row :gutter="10" class="updown">
      <el-col :span="6">
        <hy-card title="用户总数"
          ><div class="font">{{ usersAllCount }}</div>
        </hy-card>
      </el-col>
      <el-col :span="6">
        <hy-card title="评论总数"
          ><div class="font">{{ comments }}</div></hy-card
        >
      </el-col>
      <el-col :span="6">
        <hy-card title="食谱总数"
          ><div class="font">{{ recipes }}</div></hy-card
        >
      </el-col>
      <el-col :span="6">
        <hy-card title="标签总数"
          ><div class="font">{{ labels }}</div></hy-card
        >
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <hy-card title="用户增长量">
          <!-- <base-echart :options="pieOptions"></base-echart>
           -->
          <!-- <pie-echart :pieData="categoryRecipesCount"></pie-echart> -->
          <line-echart v-bind="usersDayCount"></line-echart>
        </hy-card>
      </el-col>

      <el-col :span="12"
        ><hy-card title="食谱分类">
          <rose-echart :roseData="categoryRecipesCount"></rose-echart> </hy-card
      ></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { useStore } from '@/store'
import HyCard from '@/base-ui/card'
// import pieEchart from '@/components/page-echarts/src/pie-echart.vue'
import roseEchart from '@/components/page-echarts/src/rose-echart.vue'
import lineEchart from '@/components/page-echarts/src/line-echart.vue'

export default defineComponent({
  name: 'dashboard',
  props: {},
  components: {
    HyCard,
    roseEchart,
    lineEchart
  },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')

    const categoryRecipesCount = computed(() => {
      return store.state.dashboard.categoryRecipesCount.map((item: any) => {
        return { name: item.name, value: item.count }
      })
    })

    const usersDayCount = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const usersDayCount = store.state.dashboard.usersDayCount
      for (const item of usersDayCount) {
        xLabels.push(item.time)
        values.push(item.total)
      }
      return { xLabels, values }
    })

    const usersAllCount = computed(() => {
      return store.state.dashboard.usersCount.map((item: any) => {
        return item.count
      })
    })

    const recipes = computed(() => {
      return store.state.dashboard.recipesCount.map((item: any) => {
        return item.count
      })
    })

    const labels = computed(() => {
      return store.state.dashboard.labelsCount.map((item: any) => {
        return item.count
      })
    })

    const comments = computed(() => {
      return store.state.dashboard.commentCount.map((item: any) => {
        return item.count
      })
    })

    return {
      categoryRecipesCount,
      usersDayCount,
      usersAllCount,
      recipes,
      labels,
      comments
    }
  }
})
</script>
<style scoped>
el-row {
  background-color: brown;
}
.updown {
  padding-bottom: 10px;
}

.font {
  color: rgb(101, 108, 204);
  font-size: 25px;
  padding-right: 20px;
}
</style>
