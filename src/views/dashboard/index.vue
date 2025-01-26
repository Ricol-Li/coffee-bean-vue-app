<script lang="ts" setup>
import SvgIcon from '@/components/common/SvgIcon.vue'

const { proxy } = getCurrentInstance()!

const handleClick = () => {
  proxy?.$message('this is a message')
}
</script>

<template>
  <div>
    <el-button @click="handleClick">ddddd</el-button>

    <!--<div i-ant-design:apple-filled></div>-->
    <SvgIcon icon-name="ant-design:apple-filled" custom-class="text-red" />
    <SvgIcon icon-name="ant-design:moon-outlined" custom-class="text-blue" />
    <SvgIcon icon-name="fluent-emoji-flat:bread" />
  </div>
</template>
