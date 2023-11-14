const mostVideo = () => {
  return new Promise((resolve, reject) => {
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBai24NceXlva8O4WO49FfIYJe5Rd7qk9E&type=video&q=손흥민")
      .then(async res => {
        const data = await res.json();
        console.log(data);
        console.log(data.items);
      })
      .catch((error) => console.log("error", error));
  });
};
