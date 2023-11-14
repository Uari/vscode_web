//구조분해 할당
const colors = ['red', 'green', 'blue'];

//ES5
//ES6
const [c1,c2,c3] = colors;
console.log(c1+c2+c3);

//2.객체
const dept = {
  deptno: 10,
  dname: '개발부',
  loc: '서울',
}

const {deptno, dname, loc} = dept;

console.log(dept.deptno);
console.log(dept['dname']);
console.log(deptno);