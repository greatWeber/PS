export interface Options {
  query: string; // 选择器 querySelector
  width?: number | string; //宽
  height?: number | string; //高
  plugins?: Array<string>; //插件集合  TODO:要不要规定插件类型呢？
}

export interface pluginOptions {
  name: string, //插件名称
  className: string, //插件样式class
  icon?: string, //插件工具栏的icon
  img?: string, //同上，二选一，icon>img
  
}
