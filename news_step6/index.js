const ajax = new XMLHttpRequest(); /* 브라우저가 비동기 처리를 위해 제공하는 내장객체 */
const TITLE_URL = "https://api.hnpwa.com/v0/news/1.json";
const container = document.getElementById("root");
const content = document.createElement("div");
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

//에로우 function 방식
getData = (url) => {
  //arrow function 으로 처리 - ES6추가된 컨벤션
  ajax.open("GET", url, false);
  ajax.send();
  return JSON.parse(ajax.response);
};

getNewsData = () => {
  const newsData = getData(TITLE_URL);
  const newsList = [];
  newsList.push("<ul>");
  for (let i = 0; i < 10; i++) {
    newsList.push(`
      <li>
        <a href = "#${newsData[i].id}">
          ${newsData[i].title}(${newsData[i].comments_count})
        </a>
      </li>
    `);
  }
  newsList.push("</ul>");
  container.innerHTML = newsList.join("");
}; //end of getNewsData

newsDetail = () => {
  const id = location.hash.substring(1);
  const ncontent = getData(CONTENT_URL.replace("@id", id));
  container.innerHTML = `
  <h1>${ncontent.title}</h1>
  <div><a href="#">목록으로</a></div>
  `;
}; //end of newsDetail

router = () => {
  const routerPath = location.hash;
  console.log(routerPath);
  if (routerPath === "") {
    // === : 타입까지 비교
    getNewsData(); //글목록 보기
  } else {
    newsDetail(); //글 내용 보기
  }
};

addEventListener("hashchange", router);
router();
