// 入口

import { Options } from './types/index';
import Views from './dom/views';
import { styles } from './types/dom';
import { setStyles } from './dom/createNode';
import './styles/index.less';

class PS {
  private _options: Options;
  public context: HTMLElement | null;
  private _viewInstance: Views;
  constructor(options: Options) {
    this._options = Object.assign(
      {
        width: '100%',
        height: '100%'
      },
      options
    );
    if (!this._options.query) {
      throw new Error(' new ps class,must has query filed!!!');
    }
    this.context = document.querySelector(this._options.query);

    if (!this.context) {
      throw new Error(`can't found the ${this._options.query} element!!!`);
    }

    this.drawContainer();
  }

  public drawContainer() {
    if (!this._viewInstance) {
      this._viewInstance = new Views(this.context);
    }
    this._viewInstance.drawContainer();

    if (this._options.width || this._options.height) {
      this.setContainerStyles({
        width: this._options.width,
        height: this._options.height
      });
    }
  }

  public setContainerStyles(styles: styles) {
    setStyles(this._viewInstance.container, styles);
  }
}

(global as any).PS = PS;

export default PS;
