<template>
  <div class="ping-wrap">
    <!-- header -->
    <headerComponent></headerComponent>
    <!-- container -->
    <div class="ping-container">关于我们{{ count }}</div>
    <!-- footer -->
    <footerComponent></footerComponent>
  </div>
</template>

<script setup>
import headerComponent from '@/components/header.vue'
import footerComponent from '@/components/footer.vue'
import { ref, onMounted, onUnmounted, watch } from 'vue'
const count = ref(0)
const timerHandle = ref(null)
timerHandle.value = setInterval(() => {
  count.value += 1
  console.log('[计时器]', count.value)
}, 1000)

watch(count, (newVal, oldVal) => {
  console.log('[watch]', newVal, oldVal)
})

onMounted(() => {
  console.log('[onMounted]')
})
onUnmounted(() => {
  console.log('[onUnmounted]')
  clearInterval(timerHandle.value)
})
</script>

<style lang="scss" scoped>
</style>