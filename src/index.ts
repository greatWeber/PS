// 入口

import { Options } from './types/index';
import Views from './dom/views';
import { styles } from './types/dom';
import { setStyles } from './dom/createNode';
import './styles/index.less';

class PS {
  public context: HTMLElement | null;
  public viewInstance: Views;
  public cpr: any; // current operation 缩写

  private _options: Options;
  private _plugins: Array<any> = []; //TODO:这里的类型填啥好呢

  static _plugins: Array<any> = [];

  constructor(options: Options) {
    this._options = Object.assign(
      {
        width: '100%',
        height: '100%',
        plugins: ['move']
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
    // 初始化内置插件
    this._importPlugins();
  }

  public drawContainer() {
    if (!this.viewInstance) {
      this.viewInstance = new Views(this.context);
    }
    this.viewInstance.drawContainer();

    if (this._options.width || this._options.height) {
      this.setContainerStyles({
        width: this._options.width,
        height: this._options.height
      });
    }
  }

  public setContainerStyles(styles: styles) {
    setStyles(this.viewInstance.container, styles);
  }
  //动态引进插件 TODO: 考虑一下怎么配置webpack
  private _importPlugins() {
    for (const pluginName of this._options.plugins) {
      import(`./plugins/${pluginName}/index`)
        .then((module) => {
          console.log(module);
          const plugin = module.default;
          const pluginInstance = new plugin(this);
          this._plugins.push(pluginInstance);
        })
        .catch((error) => {
          throw new Error(error);
          // console.error(error);
        });
    }
  }
}

(global as any).PS = PS;

export default PS;
