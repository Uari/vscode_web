//Resolve, Reject

const validFunc = (index) => {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      if(index > 10){
        reject(`${index}는 10보다 클수 없습니다.`);
        return;
      }
      console.log(index);
      resolve(index+1)
    }, 1000);
  })
}

validFunc(5)
.then(res => console.log(res))
.catch(err => console.log(err))
.finally(()=> console.log('처리완료'))

const wrapping = async () =>{
  try {
    const res = await validFunc(15);
    console.log(res);
  } catch (error) {
    console.error(error);
  } finally{
    console.log('정상이거나 실패인 경우 모두 항상 실행됨');
  }
}
wrapping();

