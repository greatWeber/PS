import PS from '../src/index'

describe('test ps main view',()=>{
  it('new class',()=>{
    document.body.innerHTML = `
      <div id="app"></div>
    `
    const $app = document.querySelector('#app')
    const ps = new PS({
      query:'#app'
    })
    expect(ps.context).not.toBeNull()
    expect(ps.context).toEqual($app)

    const $container = $app.querySelector('.PS--container')
    expect($container).not.toBeNull()
    expect($container.querySelector('.PS--sidebar')).not.toBeNull()
    expect($container.querySelector('.PS--drawbox')).not.toBeNull()
    expect($container.querySelector('.PS--infobox')).not.toBeNull()


  })

  it('_importPlugins',()=>{
    document.body.innerHTML = `
      <div id="app"></div>
    `
    const newThing = async()=>{

      const ps = new PS({
        query:'#app',
        plugins:['selecter']
      })
    }
    expect(newThing()).resolves.toBe(undefined)
    // expect(newThing).rejects.toThrow(Error)
    // 没法访问私有属性，怎么验证？
  })
})