const btns = document.querySelectorAll("ul li");
console.log(typeof btns);
console.log(btns.length);

for(var i = 0; i<btns.length; i++ ){
  btns[i].addEventListener('click', (e)=>{
    console.log(e.target);
    console.log(i);
  })
}