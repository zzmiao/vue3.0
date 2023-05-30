<template>
  <div class="ping-wrap">
    <!-- header -->
    <headerComponent></headerComponent>
    <!-- container -->
    <div class="ping-container">
      <test message="你是好人"></test>
      <clientComponent></clientComponent>
    </div>
    <!-- footer -->
    <footerComponent></footerComponent>
  </div>
</template>

<script setup>
import clientComponent from '@/utils/defineCom'
import headerComponent from '@/components/header.vue'
import footerComponent from '@/components/footer.vue'
import test from '@/components/test.vue'
import { reactive } from 'vue'
const dataList = reactive([
  {
    name: '周武王',
    id: 1
  },
  {
    name: '汉光帝',
    id: 2
  },
  {
    name: '乾隆皇帝',
    id: 3
  }
])
console.log('[]', dataList)
const tempList = dataList.map((item) => {
  return item.id + 1
})
console.log(tempList)
</script>

<style lang="scss" scoped>
</style>