<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { useCounterStore } from './stores/counter'

const counterStore = useCounterStore()
</script>

<template>
  <RouterLink to="/home">首页</RouterLink>
  <RouterLink to="/about">关于</RouterLink>
  <HelloWorld msg="123"></HelloWorld>
  {{ counterStore.count }}
  <button @click="counterStore.increment">点我</button>
  <el-button type="primary">dddddddd</el-button>
  <RouterView></RouterView>
</template>

<style scoped></style>
