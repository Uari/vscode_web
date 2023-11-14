//함수 안에 함수 선언이 가능하다. - 일급 함수
const createStore = () => {
  let state; //상태관리
  let handlers = [];

  //함수 안에 함수 선언
  const send = () => {};
  const subscribe = (handler) => {
    //구독해줘
    handlers.push(handler); //영속성, 유ㅠ지
  };
  
  return {
    send,
    subscribe,
  };
};
const store = createStore();
console.log(store);

store.subscribe(() => {
  console.log("subscribe");
});
store.send();
