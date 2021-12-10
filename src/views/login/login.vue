<template>
  <div class="center">
    <login-panel />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import loginPanel from './cpns/login-panel.vue'
export default defineComponent({
  components: {
    loginPanel
  },
  setup() {
    return {}
  }
})
</script>
<style scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: url(../../assets/img/login-bg.svg);
}
</style>
