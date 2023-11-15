//자바와는 다르게 선언부가 없다...(class가 없다)
function Emp(fName, lName){
  this.fName = fName; //전역변수 
  this.lName = lName;
}

Emp.prototype.printName = function(){
  return `${this.lName} ${this.fName}`;
}

Emp.prototype.see = function(pic){
  console.log(pic);
}

const james = new Emp('초보', '나');
const king = new Emp('신입', '나');

console.log(james.printName());
console.log(james.printName);
james.see(james.printName());
console.log(Emp);
console.log(king.printName());
console.log(king.printName);