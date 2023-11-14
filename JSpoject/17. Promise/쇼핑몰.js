// Promise Prototype 활용하여 비동기 처리 해보기

const select = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("상품조회");
      const goods = [{name: '스킨', price: 3000}, {name: '샴푸', price: 4000}]
      resolve(goods);
    }, 1000);
  });
};

const cart = () => {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      console.log('카트담기');
      const goods = {name:'스킨', name1:'샴푸', name2:'비누'}
      resolve(goods);
    }, 3000);
  })
};

const order = () => console.log('결제하기');

select()
.then((response) => {
  console.log(response);
  return cart();
})
.then((response)=>{
  console.log(response);
  return order();
})
