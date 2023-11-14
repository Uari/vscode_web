//OMDB - API 활용 실습
//Promise 에서 에러 핸들링
//fetch가 BOM이 제공하는 API이라서 반드시 브라우저를 통해 확인해야함

const movieList = (movieTitle) => {
  return new Promise((resolve, reject) => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=9a8734a5&s=${movieTitle}`)
    .then(res => res.json())
    .then(json => {
      if(json.Response === 'False'){
        reject(json.Error);
      }
      resolve(json);
    })
    .catch(error => {
      reject(error);
    })
    .finally(()=>{
      console.log('무조건 호출');
    })
  })
}

let loading = true;

movieList('avatar')
.then(movies => console.log(movies))
.catch(err => console.log(err))
.finally(() => loading = false )