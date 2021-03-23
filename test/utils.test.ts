import {camelize,strikethrough} from "../src/utils/pattern"

describe("test utils",()=>{

  it('test pattern',()=>{
    expect(strikethrough('HelloWorld')).toBe('hello-world')
    expect(strikethrough('helloWorld')).toBe('hello-world')

    expect(camelize('hello-world')).toBe('helloWorld')
  })
})