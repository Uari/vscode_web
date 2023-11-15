//prototype

const fruits = ['🍔', '🍟', '🌭'];
console.log(fruits);

const fruits2 = new Array('🍔', '🍟', '🌭');
console.log(fruits2);
console.log(fruits2.includes('🌭'));

Array.prototype.method = function(){
  console.log(this);
}

fruits2.method();

const arr = [];
arr.method();