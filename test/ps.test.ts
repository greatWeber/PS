import PS from '../src/index'

describe('test ps main view',()=>{
  it('new class',()=>{
    document.body.innerHTML = `
      <div id="app"></div>
    `
    console.log(document.querySelector('#app'))
    const ps = new PS({
      query:'#app'
    })
    expect(ps.context).not.toBeNull()
    expect(ps.context).toEqual(document.querySelector('#app'))
  })
})