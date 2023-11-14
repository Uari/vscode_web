const keyword = document.querySelector('#keyword'); //이벤트 소스의 주소번지 얻기 

keyword.addEventListener('keyup', (event) => {
  console.log(event.keyCode);
  //사용자가 입력한 검색어를 찾는 함수 호출 - 자동완성 기능 클론코딩 
  handleSearch();
})

//썸네일 클릭했을 때 상세보기 화면처리
let videoItem;
const videoShow = (id, title, description, channelTitle) => {
  videoItem = `
    <section class="detail">
      <iframe id="player" type="text/html" width="640" height="500"
      src="http://www.youtube.com/embed/${id}"
      frameborder="0"></iframe>    
      <h2>${title}</h2>
      <h3>${channelTitle}</h3>
      <pre class="description">
      ${description}
      </pre>
      <div>
        <a href="./youtube.html">이전페이지</a>
        &nbsp;
        <a href="javascript:search('손흥민')">이전페이지2</a>
      </div>
    </section>
  `;
  document.querySelector("#root").innerHTML = videoItem;
};

const handleSearch = () =>{
  const user = document.querySelector('#keyword').value;
  console.log(`사용자가 입력한 검색어 ====> ${user}`);
  //사용자가 입력한 검색어로 조건 검색 구현하기 
  search(user);
}
const search = (query) => {
  console.log(`사용자가 입력한 nba를 받아오기 : ${query}`);

const ajax = new XMLHttpRequest();
const Youtube_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDzwV6i4Zm5NIxUbmApQiVaSvpMoM1r4Cs&type=video&q=${keyword}`;

  ajax.open("GET", Youtube_URL, false);
  ajax.send();

/* 배열을 사용하여 템플릿을 구성해 본다. 1-2 */
const videoList = [];

const most = JSON.parse(ajax.response);
  const items = most.items;

  let items2;
  items2 = most.items.map((item)=>({...item, id: item.id.videoId}));
  console.log(items2);
  console.log(items2.length);

  let content = '';
  videoList.push( `<ul class="videos">`);
items2.map((video)=>{
  videoList.push( `<li class="container" onclick="videoShow('${video.id}','${video.snippet.title}','${video.snippet.description}','${video.snippet.channelTitle}')">`);
  videoList.push( `<div class="video">`);
  videoList.push( `<img class="thumbnail" src='${video.snippet.thumbnails.medium.url}'/>`); 
  videoList.push( `<div>`);
  videoList.push( `<p class="title">${video.snippet.title}</p>`);
  videoList.push( `<p class="channelTitle">${video.snippet.channelTitle}</p>`);
  videoList.push( `</div>`);
  videoList.push( `</div>`);
  videoList.push( `</li>`);
})
videoList.push( `</ul>`);

document.querySelector('#root').innerHTML = videoList.join("");
}