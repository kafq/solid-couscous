const apiKey = "seYUer2bPoJZHvH7soSy12u5ynQXIYbT";

export const fetchGiph = (category, callback) => {
  fetch(getGiphyUrl(category))
    .then(response => response.json())
    .then(json => {
      callback(json.data.image_url);
    });
}

const getGiphyUrl = (category) => {
  return `https://api.giphy.com/v1/gifs/random?api_key=${
    apiKey
  }&rating=G&tag=${category}`;
}