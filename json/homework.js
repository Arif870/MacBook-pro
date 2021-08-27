function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(data => getData(data));
}

fetchData();

function getData(photo) {
  let photoDiv = document.getElementById("photo");
  for (let photos of photo) {
    console.log(photos.thumbnailUrl);
    let div = document.createElement("div");
    div.innerHTML = `<img src=${photos.thumbnailUrl}>`;
  }
  photoDiv.appendChild("div");
}
