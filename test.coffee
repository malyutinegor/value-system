pair = require './src/main.js'

foo = {x: 1}
bar = {x: 2}
baz = {x: 3}

p = new pair.VSystem [[x: 'x'], [x: 'x'], [x: 'x']]
p.install 8319, [foo, bar, baz]

console.log baz.x