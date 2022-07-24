// tslint:disable-next-line:no-console
console.log('Hello World!')

let a = 1 + 2
let b = a + 3
let c = {
  apple: a,
  banana: b,
}
let d = c.apple * 4

type Cat = {
  name: string
  purrs: boolean
}

type Dog = {
  name: string
  barks: boolean
  wags: boolean
}

type CatOrDog = Cat | Dog

type CatAndDog = Cat & Dog

const e: CatOrDog = {
  name: 'cat',
  purrs: true
}

const f: CatOrDog = {
  name: 'dog',
  barks: true,
  wags: true
}

const g: CatOrDog = {
  name: 'cat',
  purrs: true,
  barks: true,
  wags: true
}

const h: CatAndDog = {
  name: 'cat',
  purrs: true,
  barks: true,
  wags: true
}

interface BuildableRequest {
  data?: object
  method: 'get' | 'post'
  url: string
}

class RequestBuilder2 {
  data?: object
  method?: 'get' | 'post'
  url?: string

  setData(data: object): this & Pick<BuildableRequest, 'data'> {
    return Object.assign(this, {data})
  }

  setMethod(method: 'get' | 'post'): this & Pick<BuildableRequest, 'method'> {
    return Object.assign(this, {method})
  }

  setURL(url: string): this & Pick<BuildableRequest, 'url'> {
    return Object.assign(this, {url})
  }

  build(this: BuildableRequest) {
    return this
  }
}

new RequestBuilder2()
  .setData({})
  .setMethod('post') // これを削除してみてください！
  .setURL('bar') // これを削除してみてください！
  .build()
