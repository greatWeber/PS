import PS from './index';

class Infobox {
  private ps: PS;
  constructor(ps: PS) {
    this.ps = ps;
    this.drawInfobox();
  }

  private drawInfobox() {
    this.ps.viewInstance.drawInfobox();
  }
}

export default Infobox;
