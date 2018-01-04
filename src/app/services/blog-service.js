const POSTS_API = 'http://localhost:9001/posts';

export function getBlogPost(id) {
  return fetchData(POSTS_API + "/" + id)
}

export function getComments(id) {
  return fetchData(POSTS_API + "/" + id + "/comments")
}

export function getBlogPosts(){
  return fetchData(POSTS_API);
}

function fetchData(url) {
  return fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
  .catch((error) => {
    console.error(error);
  })
}
