<!-- 所有图标都可以去https://icones.js.org/里去查找 -->
<!-- 如果是设计给的图片，可以上传到OSS上，配置svg的链接 -->

<script setup lang="ts">
import { isExternal } from '@/utils/validate'
import { Icon as IconifyIcon } from '@iconify/vue'
// import { PropType } from "vue"
// Vue3.5的解构属性不支持
interface IProps {
  iconName: string
  customClass?: string
}

const { iconName, customClass } = withDefaults(
  defineProps<IProps>(),

  {
    iconName: '',
    customClass: '',
  },
)

// const { iconName, customClass } = defineProps<{
//   iconName: string
//   customClass?: string
// }>()

// const { iconName, customClass } = defineProps({
//   iconName: {
//     type: String,
//     default: '',
//   },
//   customClass: {
//     type: String,
//     default: '',
//   },
// })

// const { customClass } = defineProps({
//   customClass: Object as PropType<{ a: 1; b: 2 }>
// })

const isExt = computed(() => isExternal(iconName))
// class="customClass + icon"
// 组合成的类名
const svgClass = computed(() => (customClass ? `icon ${customClass}` : 'icon'))
// 通过mask 渲染svg 图标 兼容性不好，可以通过请求svg的方式来渲染
const styleExternalIcon = computed(() => ({
  mask: `url(${iconName}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${iconName}) no-repeat 50% 50%`,
  'mask-size': 'cover',
}))
</script>

<template>
  <IconifyIcon v-if="!isExt" :class="svgClass" :icon="iconName" v-bind="$attrs" />
  <div v-else :style="styleExternalIcon" :class="svgClass" bg-current v-bind="$attrs"></div>
</template>
<!-- 在实现图标的时候 尽量采用svg， 不要采用font图标 -->
