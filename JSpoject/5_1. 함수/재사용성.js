let lastName = '나';
let firstName = '신입';
let fullName = `${lastName} ${firstName}`;

console.log(fullName);
//console.log(funcName(firstName,lastName));
console.log(funcName2('강','감찬'));

//arrow function
funcName = (firstName, lastName) =>{
  return `${firstName} ${lastName}`;
}
//function
function funcName2(firstName, lastName){
  return `${firstName} ${lastName}`;
}
