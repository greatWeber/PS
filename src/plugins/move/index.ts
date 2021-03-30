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
    this.drawAttrBar();
    this.bindEvents();
  }

  public drawPlugin() {
    const _op = this._options;
    this._container = createElmByClassName(
      this.ps.viewInstance.sidebar,
      'div',
      `SIDEBAR-cell ${this._options.className}`
    );
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
    this._container.addEventListener('click', handleClickCell, false);
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
  }

  /**
   * 创建属性栏
   * 1. 对齐方式：顶对齐；垂直居中对齐；底对齐；左对齐；水平居中对齐；右对齐
   */
  private drawAttrBar() {
    this._itemAlign = createElmByClassName(this.ps.viewInstance.attrbar, 'div', 'ATTRBOX-align');
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
}

export default Move;
