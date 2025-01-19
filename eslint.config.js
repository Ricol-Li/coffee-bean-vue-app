import globals from 'globals'
import pluginJs from '@eslint/js' // 校验js规范的 （推荐）
import tseslint from 'typescript-eslint' // 推荐的ts规范
import pluginVue from 'eslint-plugin-vue' // 推荐的Vue的规范
import prettierRecommended from 'eslint-plugin-prettier/recommended'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'], // 校验vue的ts代码
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  // prettier规则 覆盖eslint
  prettierRecommended,
  {
    rules: {
      // 强制组件内的命名约定
      'vue/component-tags-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],

      // 强制自闭合标签的使用，适用于 HTML、SVG 和 MathML 元素
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always', // HTML 空元素（如 <img>, <br>）必须自闭合
            normal: 'never', // 普通 HTML 元素不允许自闭合
            component: 'always', // Vue 组件必须自闭合
          },
          svg: 'always', // SVG 元素必须自闭合
          math: 'always', // MathML 元素必须自闭合
        },
      ],
      'vue/multi-word-component-names': 'off',
      'vue/attributes-order': [
        'error',
        {
          order: [
            'DEFINITION',
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'GLOBAL',
            ['UNIQUE', 'SLOT'],
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'OTHER_ATTR',
            'EVENTS',
            'CONTENT',
          ],
          alphabetical: false,
        },
      ],
      // template script 和 style 之间的空行
      'vue/padding-line-between-blocks': ['error', 'always'],
    },
  },
]
