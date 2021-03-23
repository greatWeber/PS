// some thing about node operation
import {styles} from "../types/dom"
import {strikethrough} from '../utils/pattern'
/**
 * 根据className创建节点
 * @param context 父级节点
 * @param tag html标签
 * @param className
 * @returns 创建的节点
 */
export const createElmByClassName = (context: HTMLElement, tag: string, className: string): HTMLElement => {
  const elm: HTMLElement = document.createElement(tag);
  elm.className = className;
  context.appendChild(elm);
  return elm;
};

/**
 * 根据样式创建节点
 * @param context 父级节点
 * @param tag html标签
 * @param style 样式
 * @returns 创建的节点
 */
export const createElmByStyle = (context: HTMLElement, tag: string, style: string): HTMLElement => {
  const elm: HTMLElement = document.createElement(tag);
  elm.style.cssText = style;
  context.appendChild(elm);
  return elm;
};

/**
 * 设置样式
 * @param context 
 * @param styles 样式对象
 */
export const setStyles = (context: HTMLElement ,styles:styles) => {
  let styleStr:string = '';
  Object.keys(styles).forEach((key:string)=>{
    styleStr+=`${key}:${styles[key]};`
  })
  styleStr = strikethrough(styleStr)
  context.style.cssText = styleStr
}
