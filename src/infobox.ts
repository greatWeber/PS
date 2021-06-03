import { createElmByClassName } from './dom/createNode';
import PS from './index';
import { History } from './types/index';
/**信息框有两个功能点
 * 1. 记录历史，并且可以前进后退
 * 2. 当前选中对象的信息
 *
 */
class Infobox {
  private ps: PS;
  public $history: HTMLElement;

  public historyArray: Array<History> = [{ el: '#app', title: '移动', style: '' }];

  constructor(ps: PS) {
    this.ps = ps;
    this.drawInfobox();
  }

  private drawInfobox() {
    this.$history = this.ps.viewInstance.drawInfoboxMessages();
    this.drawHistory();
  }
  /**
   * 绘制历史记录
   * @returns
   */
  public drawHistory() {
    if (this.historyArray.length == 0) return;

    for (const h of this.historyArray) {
      const $item: HTMLElement = createElmByClassName(this.$history, 'div', 'INFOBOX-history--item');
      $item.dataset.el = h.el;
      $item.dataset.style = h.style;
      $item.innerHTML = `
        <span class="INFOBOX-history--title">${h.title}</span>
        <p>
          <span class="INFOBOX-history--icon ps-icon ps-icon-restore" title="还原"></span>
          <span class="INFOBOX-history--icon ps-icon ps-icon-delete" title="删除"></span>
        </p>
      `;
    }
  }
}

export default Infobox;
