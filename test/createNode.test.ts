import {setStyles} from "../src/dom/createNode"
describe('test createNode',()=>{

  it('test setStyles',()=>{
    document.body.innerHTML = '<div id="app"></div>';

    const $app = document.getElementById('app');
    // const $app = document.querySelector('#app');
    setStyles(($app as HTMLElement),{
      width: '100px',
      height: '100px'
    })
    expect($app.style.width).toBe('100px')
    expect($app.style.height).toBe('100px')
  })
})