//some thing about view
import { createElmByClassName } from './createNode';
class Views {
  public context: HTMLElement;
  public container: HTMLElement;
  public sidebar: HTMLElement;
  public attrbar: HTMLElement;
  public drawbox: HTMLElement;
  public infobox: HTMLElement;

  constructor(context: HTMLElement) {
    this.context = context;
  }
  /**
   * 绘制整体UI
   */
  public drawContainer(): void {
    this.container = createElmByClassName(this.context, 'div', 'PS--container');
    this.sidebar = createElmByClassName(this.container, 'div', 'PS--sidebar');
    this.attrbar = createElmByClassName(this.container, 'div', 'PS--attrbar');
    this.drawbox = createElmByClassName(this.container, 'div', 'PS--drawbox');
    this.infobox = createElmByClassName(this.container, 'div', 'PS--infobox');
  }

  /**
   * 绘制信息区域
   */
  public drawInfobox(): void {
    const $infoTop = createElmByClassName(this.infobox, 'div', 'INFOBOX-messages');
    const childStr = `
      <div class="infobox-messages--tabs">
        <p class="infobox-tabs--item">历史</p>
        <p class="infobox-tabs--item">信息</p>
      </div>

        <div class="infobox-tabs-history"></div>
        <div class="infobox-tabs-info"></div>
    `;
    $infoTop.innerHTML = childStr;
  }
}

export default Views;
