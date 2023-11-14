/* 우리가 접근해야 할 DOM 요소 선언*/
const items = document.querySelector(".items");
const input = document.querySelector("#footer_input");
const btnPlus = document.querySelector(".footer_button");

plusEvent = () => {
  /* 사용자가 입력한 텍스트를 받아옴 */
  const text = input.value;
  console.log(text);
  //비교시 (==)이면 값만 비교 , (===)이면 타입도 비교
  //만일 아무것도 입력하지 않고 버튼을 누르면
  //포커스를 input text로 옯기고 함수를 탈출함
  if (text === "") {
    input.focus();
    return;
  }
  // 새로운 아이템을 만든다 (텍스트 + 삭제버튼)
  const item = cteateItem(text);
  //items 컨테이너 안에 새로 만든 아이템을 추가한다
  items.appendChild(item);

  //새로 추가된 아이템으로 스크롤링을 함
  item.scrollIntoView({ block: "center" });
  //input 값을 초기화 한다.
  input.value = "";
  input.focus(); //커서가 위치하게 함
};

cteateItem = (text) => {
  //DOM제공하는 함수를 이용하여 태그 만듬
  const itemRow = document.createElement("li");
  //태그 속성을 추가할 때 setAttribute 함수를 사용
  itemRow.setAttribute("class", "item_row");
  const item = document.createElement("div");
  item.setAttribute("class", "item");
  const name = document.createElement("span");
  itemRow.setAttribute("class", "item_name");
  name.innerText = text;
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item_delete");
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  //createItem이 호출 되었을 때 화면이 먼저 완성 되고(랜더링 == DOM TREE)
  //난 다음에야 버튼이 눌려질 테니까 파라미터의 itemRow는 createItem 함수에서
  //생성된 전부를 이미 쥐고 있다.
  deleteBtn.addEventListener("click", () => {
    items.removeChild(itemRow);
  });
  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item_divider");
  item.appendChild(name);
  item.appendChild(deleteBtn);
  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
};

btnPlus.addEventListener("click", () => {
  /* 버튼 클릭시 이벤트 처리 */
  plusEvent();
});

//엔터 쳤을 때도 동일 (하나 - 함수로 묶어야한다 )
//엔터 키값 13번
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    plusEvent();
  }
});
