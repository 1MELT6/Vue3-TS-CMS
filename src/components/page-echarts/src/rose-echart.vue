<template>
  <div class="rose-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import BaseEchart from '@/base-ui/echart'

import { IDataType } from '../types'

const props = defineProps<{
  roseData: IDataType[]
}>()

const options = computed(() => {
  return {
    legend: {
      top: 'bottom'
    },
    tooltip: {
      trigger: 'item',
      formatter: ' {b} : {c} ({d}%)'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: [30, 120],
        center: ['50%', '40%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 9
        },
        data: props.roseData
      }
    ]
  }
})
</script>

<style scoped></style>
