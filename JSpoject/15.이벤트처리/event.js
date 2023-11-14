const a =document.querySelector('a');

console.dir(a);

a.onclick = () =>{
  console.log('링크클릭');
}

a.onclick = () =>{
  console.log('링크클릭 다시');
}
//같은 이벤트 중복사용 불가 처음 했던 이벤트 묻힘 -> 나중에 만든 이벤트가 동작


a.addEventListener('click', ()=>{
  console.log('click again');
})
a.addEventListener('click', ()=>{
  console.log('click reagain');
})