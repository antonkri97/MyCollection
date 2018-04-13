export function fetchImages() {
  return fetch(
    "https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=LuQ5TeE61rHtgdtLQTU5Su1120I12Tgr&limit=30"
  )
    .then(response => response.json())
    .then(data => data.data)
    .then(json => json.map(country => country.images.fixed_height.webp));
}

export function getImages() {
  return images;
}

const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "images/9.jpg",
  "images/10.jpg",
  "images/11.jpg",
  "images/12.jpg",
  "images/13.jpg",
  "images/14.jpg",
  "images/15.jpg",
  "images/16.jpg",
  "images/17.jpg",
  "images/18.jpg",
  "images/19.jpg",
  "images/20.jpg",
  "images/21.jpg",
  "images/22.jpg",
  "images/23.jpg",
  "images/24.jpg",
  "images/25.jpg",
  "images/26.jpg",
  "images/27.jpg",
  "images/28.jpg",
  "images/29.jpg",
  "images/30.jpg",
  "images/31.jpg",
  "images/32.jpg"
];
