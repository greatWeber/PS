import { createElmByClassName } from '../../dom/createNode';
import PS from '../../index';
import { pluginOptions } from '../../types';

/**
 * 选择工具插件
 */
class Select {
  ps: PS;
  private _options: pluginOptions;
  private _container: HTMLElement;
  constructor(ps: PS, options: pluginOptions) {
    this.ps = ps;
    this._options = Object.assign(
      {
        className: 'select-plugin',
        icon: 'ps-icon-select'
      },
      options
    );
    this.init();
  }

  public init() {
    this.drawPlugin();
  }

  public drawPlugin() {
    const _op = this._options;
    this._container = createElmByClassName(
      this.ps.viewInstance.sidebar,
      'div',
      `SIDEBAR-cell ${this._options.className}`
    );
    if (_op.icon) {
      const $icon = createElmByClassName(this._container, 'span', `SIDEBAR-cell--icon ${_op.icon}`);
    } else if (_op.img) {
      const $img = createElmByClassName(this._container, 'img', 'SIDEBAR-cell--img');
      $img.setAttribute('src', _op.img);
    }
  }

  public bingEvents() {
    this._container.addEventListener('click', this.handleClickCell, false);
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
}

export default Select;
