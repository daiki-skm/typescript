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
