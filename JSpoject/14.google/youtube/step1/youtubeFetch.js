const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBai24NceXlva8O4WO49FfIYJe5Rd7qk9E&type=video&q=손흥민", requestOptions)
  .then(async response => {
    const data = await response.json();
    console.log(data);
    console.log(data.items);
    console.log(JSON.stringify(data));
  })
  .catch(error=>console.log('error', error));