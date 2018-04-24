export function fetchImages() {
  return fetch(
    "https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=LuQ5TeE61rHtgdtLQTU5Su1120I12Tgr&limit=30"
  ).then(response => response.json().then(data => data.data.map(imageMapper)));
}

function imageMapper(image) {
  // eslint-disable-next-line no-console
  console.log(image);
  return image.images.fixed_height.webp;
}
