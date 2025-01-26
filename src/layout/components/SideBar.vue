<script lang="ts" setup>
import variables from '@/style/variables.module.scss'
console.log(variables)

const route = useRoute()

const defaultActive = computed(() => {
  return route.path
})
</script>

<template>
  <el-menu
    router
    :default-active="defaultActive"
    :background-color="variables.menuBg"
    :text-color="variables.menuText"
    :active-text-color="variables.menuActiveText"
    :collapse="false"
    class="siderbar-container_menu"
  >
    <el-menu-item index="/dashboard">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
  </el-menu>
</template>
