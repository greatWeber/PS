// 入口

import { Options } from './types/index';
class PS {
  private _options: Options;
  public context: HTMLElement | null;
  constructor(options: Options) {
    this._options = Object.assign(options, {
      width: '100%',
      height: '100%'
    });
    if (!this._options.query) {
      throw new Error(' new ps class,must has query filed!!!');
    }
    this.context = document.querySelector(this._options.query);

    if (!this.context) {
      throw new Error(`can't found the ${this._options.query} element!!!`);
    }
  }
}
