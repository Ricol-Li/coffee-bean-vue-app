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
  {
    // 哪些文件不通过eslint校验
    ignores: ['.css', '*.d.ts'],
    // 添加自己的校验规则
    rules: [],
  },
  // prettier规则 覆盖eslint
  prettierRecommended,
]
