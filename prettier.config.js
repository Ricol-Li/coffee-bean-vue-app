export default {
  arrowParens: 'avoid',
  // 箭头函数参数周围的括号使用情况：
  // "avoid"：尽可能省略箭头函数参数周围的括号，例如：x => x
  // "always"：始终使用括号包裹箭头函数参数，例如：(x) => x

  bracketSameLine: false,
  // 对于多行对象、数组、函数调用等，最后一个元素的右括号是否和前面元素在同一行：
  // false：将右括号放在新的一行，例如：
  // function foo() {
  //   return [
  //     1,
  //     2
  //   ];
  // }
  // true：将右括号放在同一行，例如：
  // function foo() {
  //   return [
  //     1,
  //     2 ];
  // }

  bracketSpacing: true,
  // 在对象字面量中，对象的括号内是否添加空格：
  // true：{ foo: bar }
  // false：{foo: bar}

  embeddedLanguageFormatting: 'auto',
  // 对于嵌入在文件中的其他语言的格式化处理：
  // "auto"：根据 Prettier 的判断自动格式化
  // "off"：不格式化嵌入语言

  endOfLine: 'lf',
  // 换行符类型：
  // "lf"：使用 Unix 风格的换行符（\n）
  // "crlf"：使用 Windows 风格的换行符（\r\n）
  // "auto"：根据文件内容自动选择

  htmlWhitespaceSensitivity: 'css',
  // HTML 中的空格敏感度：
  // "css"：遵循 CSS 的显示属性，忽略元素之间的空格
  // "strict"：严格保留空格
  // "ignore"：完全忽略 HTML 中的空格

  insertPragma: false,
  // 是否插入 @format pragma：
  // false：不插入
  // true：在文件头部插入 @format，可用于标记 Prettier 已经格式化过的文件

  jsxSingleQuote: false,
  // 在 JSX 中是否使用单引号：
  // false：使用双引号，例如：<div className="example"></div>
  // true：使用单引号，例如：<div className='example'></div>

  printWidth: 140,
  // 每行代码的最大字符宽度，超过此宽度会尝试折行

  proseWrap: 'preserve',
  // 文本文件（如 Markdown）的换行处理：
  // "always"：将文本包裹，使其不超过 printWidth
  // "never"：不包裹文本
  // "preserve"：保持原始的换行

  quoteProps: 'as-needed',
  // 对象字面量中属性名的引号使用：
  // "as-needed"：仅在需要时使用引号，例如：{ foo: "bar" }
  // "consistent"：保持一致，如果有一个属性使用了引号，所有属性都使用引号
  // "preserve"：保持原有的引号使用情况

  requirePragma: false,
  // 是否仅格式化包含 @format pragma 的文件：
  // false：格式化所有文件
  // true：仅格式化包含 @format 的文件

  semi: false,
  // 语句末尾是否添加分号：
  // true：添加分号，例如：let x = 1;
  // false：不添加分号，例如：let x = 1

  singleQuote: true,
  // 字符串使用单引号还是双引号：
  // false：使用双引号，例如："example"
  // true：使用单引号，例如：'example'

  tabWidth: 2,
  // 制表符的宽度，即等于多少个空格

  trailingComma: 'all',
  // 对于多行结构（对象、数组、函数参数等）是否添加尾随逗号：
  // "es5"：仅在多行时添加，且遵循 ES5 规则
  // "all"：始终添加尾随逗号
  // "none"：不添加尾随逗号

  useTabs: false,
  // 是否使用制表符进行缩进：
  // false：使用空格进行缩进
  // true：使用制表符进行缩进

  vueIndentScriptAndStyle: false,
  // 在 Vue 文件中，<script> 和 <style> 标签内的代码是否缩进：
  // false：不额外缩进
  // true：额外缩进
}
