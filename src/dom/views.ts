//some thing about view
import {createElmByClassName} from './createNode'
class Views {
  public context: HTMLElement
  public container: HTMLElement
  public sidebar: HTMLElement
  public drawbox: HTMLElement
  public infobox: HTMLElement

  constructor(context: HTMLElement){
    this.context = context

    this.drawContainer()
  }
  /**
   * 绘制整体UI
   */
  public drawContainer():void{
    this.container = createElmByClassName(this.context,'div','PS--container')
    this.sidebar = createElmByClassName(this.container,'div','PS--sidebar')
    this.drawbox = createElmByClassName(this.container,'div','PS--drawbox')
    this.infobox = createElmByClassName(this.container,'div','PS--infobox')
  }
}

export default Views