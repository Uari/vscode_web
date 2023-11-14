const ajax =
  new XMLHttpRequest(); /* 브라우저가 비동기 처리를 위해 제공하는 내장객체 */
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
  ajax.open("GET", url, false);
  ajax.send();
  return JSON.parse(ajax.response);
};

const newsList = getData(TITLE_URL); //6번에서 요청했을 때 서버측의 응답을 받아오는 속성이 response
const ul = document.createElement("ul"); //DOM API 가지고 태그를 만드니까 직관적이지 않다. DOM Tree가 그려지지 않음

//해시값이 변경될 때 - 인터셉트 - @id -> Array 에 담긴 id값으로 변경
//내용화면으로 집입하는 구간
addEventListener("hashchange", () => {
  const id = location.hash.substring(1);
  const ncontent = getData(CONTENT_URL.replace("@id", id));

  container.innerHTML = `
    <h1>${ncontent.title}</h1>
    <div><a href="#">목록으로</a></div>
  `;

  /*   title.innerHTML = ncontent.title;
  content.appendChild(title); //<h1>제목</h1> <div>내용</div> */
});

//배열선언 - 뉴스목록을 배열에 담아서 한번에 root안에 집어 넣어준다.
const newsPage = [];
newsPage.push("<ul>");
for (let i = 0; i < 10; i++) { 
  newsPage.push(`
    <li>
      <a href = "#${newsList[i].id}">
        ${newsList[i].title}(${newsList[i].comments_count})
      </a>
    </li>
  `);
}
newsPage.push("</ul>");
container.innerHTML = newsPage.join("");
/* 
  배열에 각각에 담긴 값들을 자바에서 for문 돌려서 나열하는 것 같이 join을 해주면 
  값들이 나열이 된다.
  join() 파라미터 값에 아무값도 넣지 않으면 defalte (,)가 같이 붙는다.
*/

/* 
  DOM API를 사용하여 페이지를 그렸더니 직관적이지 않아서 
  유지보수하는데 불편할 것 같음
  개선 -> DOM API를 사용하지 않는다. 대신 문자열을 이용하여 태그를 이어 붙이면
  코드양은 늘어나지만 오히려 복잡도는 낮출수도 있다.
  createElement, appendChild 가능한 다 지운다.
*/
