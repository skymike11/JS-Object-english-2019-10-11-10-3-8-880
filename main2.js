var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
}
let count = 0
for(let p in fruit) {
    count+= fruit[p]
}
console.log(count)