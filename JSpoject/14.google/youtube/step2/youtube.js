const ajax = new XMLHttpRequest(); 
const Youtube_URL = "https://www.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyBai24NceXlva8O4WO49FfIYJe5Rd7qk9E&maxResults=10&chart=mostPopular";

  ajax.open("GET", Youtube_URL, false);
  ajax.send();

/* 배열을 사용하여 템플릿을 구성해 본다. 1-2 */
const videoList = [];

const most = JSON.parse(ajax.response);
  const items = most.items;

  let content = '';
  videoList.push( `<ul class="videos">`);
for (let i = 0; i < items.length; i++) {
  //25번 반복 - 25개의 li
  videoList.push( `<li class="container">`);
  videoList.push( `<div class="video">`);
  videoList.push( `<img class="thumbnail" src='${items[i].snippet.thumbnails.medium.url}'/>`); 
  videoList.push( `<div>`);
  videoList.push( `<p class="title">${items[i].snippet.title}</p>`);
  videoList.push( `<p class="channelTitle">${items[i].snippet.channelTitle}</p>`);
  videoList.push( `</div>`);
  videoList.push( `</div>`);
  videoList.push( `</li>`);
}
videoList.push( `</ul>`);

document.querySelector('#root').innerHTML = videoList.join("");