var kittens = ["Milo", "Otis", "Garfield"] //define your array here
var kitty = "Numbo";

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

// destructivelyAppendKitten(kitty)
// console.log(kittens)

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

// destructivelyPrependKitten(kitty)
// console.log(kittens)

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}
