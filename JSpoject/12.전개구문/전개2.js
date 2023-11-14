let depts =[{
  0: {deptno: 10, dname: '총무부', loc:'부산'},
  1: {deptno: 20, dname: '개발부', loc:'서울'},
  2: {deptno: 30, dname: '인사부', loc:'인천'}
}]
let depts2 =[
  {
    0: {deptno: 10, dname: '총무부', loc:'부산'},
    1: {deptno: 20, dname: '개발부', loc:'서울'},
    2: {deptno: 30, dname: '인사부', loc:'인천'}
  }
]

depts.forEach((dept, index)=>{
  if(index === 0){
    console.log(dept);
    console.log(dept[0]);
    console.log(dept[0].loc);
    console.log(dept[0]['loc']);
  }
})

const depts3 = JSON.stringify(response);
depts.map((dept, index)=>{
  if(index === 0){
    console.log(dept);
    console.log(dept[0]);
    console.log(dept[0].loc);
    console.log(dept[1]['loc']);
  }
})