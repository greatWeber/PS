import { createElmByClassName } from '../../dom/createNode';
import PS from '../../index';
import { pluginOptions } from '../../types';
import './index.less';

/**
 * 移动工具插件
 */
class Move {
  ps: PS;
  private _options: pluginOptions;
  private _container: HTMLElement;
  private _itemAlign: HTMLElement;
  // 工具类变量
  private _itemPrevSelected: HTMLElement = null;

  // static alignType: Array<string> = ['top','vertical','bottom','left','horizontal','right'];
  static alignType: Map<string, string> = new Map([
    ['top', '顶部对齐'],
    ['vertical', '垂直居中对齐'],
    ['bottom', '底部对齐'],
    ['left', '左对齐'],
    ['horizontal', '水平居中对齐'],
    ['right', '右对齐']
  ]);

  constructor(ps: PS, options: pluginOptions) {
    this.ps = ps;
    this._options = Object.assign(
      {
        className: 'move-plugin',
        icon: 'ps-icon-move'
      },
      options
    );
    this.init();
  }

  public init() {
    this.drawPlugin();
    this.bindEvents();
  }

  public drawPlugin() {
    const _op = this._options;
    this._container = createElmByClassName(
      this.ps.viewInstance.sidebar,
      'div',
      `SIDEBAR-cell ${this._options.className}`
    );
    this._itemAlign = createElmByClassName(this.ps.viewInstance.attrbar, 'div', 'ATTRBOX-align');
    if (_op.icon) {
      const $icon = createElmByClassName(this._container, 'span', `SIDEBAR-cell--icon ps-icon ${_op.icon}`);
    } else if (_op.img) {
      const $img = createElmByClassName(this._container, 'img', 'SIDEBAR-cell--img');
      $img.setAttribute('src', _op.img);
    }
  }

  public bindEvents() {
    const handleClickCell = (e: MouseEvent) => {
      this.handleClickCell(e);
    };
    const handleClickAlign = (e: MouseEvent) => {
      this.handleClickAlign(e);
    };
    this._container.addEventListener('click', handleClickCell, false);
    this._itemAlign.addEventListener('click', handleClickAlign, false);
  }

  // 点击工具
  private handleClickCell(e: MouseEvent) {
    /**
     * TODO:
     * 1. 添加选中样式
     * 2. 保存当前操作的对象
     * 3. 修改属性栏
     * ...more
     */
    if (this.ps.cpr === this) return;
    this.ps.cpr = this;
    this._container.classList.add('SIDEBAR-cell__selected');
    this.drawAttrBar();
  }

  /**
   * 创建属性栏
   * 1. 对齐方式：顶对齐；垂直居中对齐；底对齐；左对齐；水平居中对齐；右对齐
   */
  private drawAttrBar() {
    let childStr: string = '<span class="ATTRBOX-align--label">对齐方式 : </span>';

    Move.alignType.forEach((value, key) => {
      childStr += `
        <span 
          class="ATTRBOX-align--icon ps-icon ps-icon-align-${key}"
          data-role="move"
          data-attr="align"
          data-value="${key}"
          title="${value}"
        ></span>
      `;
    });
    this._itemAlign.innerHTML = childStr;
  }

  /**
   * 点击对齐按钮，选中当前，并执行核心方法
   * @param e
   */
  private handleClickAlign(e: MouseEvent) {
    // console.log(e);
    const $target = e.target as HTMLElement;
    const dataset: DOMStringMap = $target.dataset;
    if (dataset.role !== 'move' || dataset.attr !== 'align') return;
    if (this._itemPrevSelected) {
      this._itemPrevSelected.classList.toggle('ATTRBOX-align--icon__selected');
    }
    $target.classList.toggle('ATTRBOX-align--icon__selected');
    this._itemPrevSelected = $target;
    this.itemAlignCode(dataset.value);
  }
  /**
   * 实现对齐的核心函数
   * @param type
   */
  private itemAlignCode(type: string) {
    // TODO
  }
}

export default Move;
