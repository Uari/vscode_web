const ajax = new XMLHttpRequest(); /* 브라우저가 비동기 처리를 위해 제공하는 내장객체 */
const TITLE_URL = "https://api.hnpwa.com/v0/news/1.json";
const container = document.getElementById("root");
const content = document.createElement("div");
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

/* function getData(url) {
  ajax.open("GET", url, false);
  ajax.send();
  return JSON.parse(ajax.response);
} */

//에로우 function 방식
getData = (url) => {
  //arrow function 으로 처리 - ES6추가된 컨벤션
  ajax.open("GET", url, true);
  ajax.send();
  return JSON.parse(ajax.response);
};

//open은 XMLHttpRequest 객체가 제공하는 함수로 파라미터는 3개가 필요
//1)전송방식, 2) 요청하는 URL 3)true : 동기, false:비동기 처리
//ajax변수는 XMLHttpRequest를 참조하는 변수명

//ajax.open("GET", TITLE_URL, false);
//ajax.send(); //send()호출될 때 비로서 서버측에 요청이 일어남

const newsList = getData(TITLE_URL); //6번에서 요청했을 때 서버측의 응답을 받아오는 속성이 response
console.log(newsList); //서버측에서 보낸 응답을 출력해 보기 - Array로 변환하여 출력해줌
const ul = document.createElement("ul"); //DOM API 가지고 태그를 만드니까 직관적이지 않다. DOM Tree가 그려지지 않음

//해시값이 변경될 때 - 인터셉트 - @id -> Array 에 담긴 id값으로 변경
addEventListener("hashchange", () => {
  const id = location.hash.substring(1);
  const ncontent = getData(CONTENT_URL.replace("@id", id));
  const title = document.createElement("h1");
  title.innerHTML = ncontent.title;
  content.appendChild(title); //<h1>제목</h1> <div>내용</div>
});

for (let i = 0; i < 5; i++) {
  const div = document.createElement("div");
  div.innerHTML = `
    <li>
      <a href = "#${newsList[i].id}">
        ${newsList[i].title} ( Click ${newsList[i].comments_count} )
      </a>
    </li>
  `;
  ul.appendChild(div.firstElementChild);
} //end of for

container.appendChild(ul);
container.appendChild(content);
