export interface Options {
  query: string; // 选择器 querySelector
  width?: number | string; //宽
  height?: number | string; //高
  plugins?: Array<string>; //插件集合  TODO:要不要规定插件类型呢？
}
