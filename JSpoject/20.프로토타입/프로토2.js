const person = {
  firstName: '초보',
  lastName: '나',
  printName: function(){
    return `${this.firstName} ${this.lastName}`
  }
}

const student = {
  firstName: '신입',
  lastName: '나'
}

console.log(person.printName());
console.log(person.printName.call(student));