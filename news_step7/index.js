const ajax =
  new XMLHttpRequest(); /* 브라우저가 비동기 처리를 위해 제공하는 내장객체 */
const TITLE_URL = "https://api.hnpwa.com/v0/news/1.json"; //목록
const container = document.getElementById("root");
const content = document.createElement("div");
/* 목록 보기 눌렀을때 처음페이지가 아니라 글 제목 누른 페이지로 돌아와야한다
어제까지 #38099086 - substring(1) -> 38099086
http://localhost:1234/#38099086

오늘부터
페이지 번호가 계속 바뀐다 - 상태 - (세션 쿠키 - 리덕스)
상세페이지 - 구분 - show
목록페이지 - 구분 - page
http://localhost:1234/#/page/1
http://localhost:1234/#/page/2
http://localhost:1234/#/show/2
http://localhost:1234/#/show/2
*/
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

//페이징 처리를 위한 필요한 상태값을 관리하는 객체 (VO같은 느낌)
const store = {
  currentPage: 1,
  totalRecord: 47,
};

//에로우 function 방식
getData = (url) => {
  //arrow function 으로 처리 - ES6추가된 컨벤션
  ajax.open("GET", url, false);
  ajax.send();
  return JSON.parse(ajax.response);
};

//글 내용을 보려면 글목록 화면에서 제목을 클릭했을 때 (a태그가 발동되었을 때) 상세페이지로 이동
getNewsData = () => {
  const newsData = getData(TITLE_URL);
  const newsList = [];
  newsList.push("<ul>");
  for (let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++) {
    //<a> - 상세보기 (글 내용보기로 이동) - #/show/
    // localhost:1234/#/show/2      xxx.substring(7)-Number('2') = Interger.parseInt()
    newsList.push(`
      <li>
        <a href = "#/show/${newsData[i].id}">
          ${newsData[i].title}( click ${newsData[i].comments_count} )
        </a>
      </li>
    `);
  }
  newsList.push("</ul>");

  //페이징 처리
  newsList.push(`
    <div>
      <a href = "#/page/${
        store.currentPage > 1 ? store.currentPage - 1 : 1
      }">이전페이지</a>
      <a href = "#/page/${
        store.currentPage < 3 ? store.currentPage + 1 : 3
      }">다음페이지</a>
    </div>
  `);

  container.innerHTML = newsList.join("");
}; //end of getNewsData

newsDetail = () => {
  const id = location.hash.substring(7);
  const ncontent = getData(CONTENT_URL.replace("@id", id));
  container.innerHTML = `
  <h1>${ncontent.title}</h1>
  <div><a href="#/page/${store.currentPage}">목록으로</a></div>
  `;
}; //end of newsDetail

router = () => {
  const routerPath = location.hash;
  console.log(routerPath);
  if (routerPath === "") {
    // === : 타입까지 비교
    getNewsData(); //글목록 보기
  } else if (routerPath.indexOf("#/page/") >= 0) {
    // -> #/page/ 이런 형태로 들어와 있으면 이게 0 보다 크면 page라고 하는 해시변경 확인
    /* currentPage에 2페이지, 3페이지 이렇게 들어가 있음 페이지 뒤에 숫자값을 넣으면 됨
    그런데 우리는 아직 추출하지 않았으니 상수로 2를 주어 동작 확인  */
    store.currentPage = Number(routerPath.substring(7)); //현재 페이지값
    getNewsData(); // 글내용 보기
  } else {
    newsDetail(); //글 내용 보기
  }
};

addEventListener("load", () => {});

addEventListener("hashchange", router);
router(); //전처리과정
