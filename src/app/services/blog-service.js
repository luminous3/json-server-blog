const POSTS_API = 'http://localhost:9001/posts';

export function getBlogPosts(){
  return fetch(POSTS_API)
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
  .catch((error) => {
    console.error(error);
  });
}
