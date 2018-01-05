const POSTS_API = 'http://localhost:9001/posts';

export function postComment(id, opts) {
  let headers = new Headers();
  headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/json');
  return fetch(POSTS_API + "/" + id + "/comments", {
    method: 'POST',
    credentials: 'include',
    redirect: 'follow',
    headers: headers,
    body: JSON.stringify(opts),
  }).then((response) => {
    return response.json()
  })
    .then((responseJson) => {
      return responseJson;
  })
  .catch((error) => {
    console.error(error);
  })
}

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
