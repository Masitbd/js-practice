fetch("https://jsonplaceholder.typicode.com/posts")
  .then((Response) => Response.json())
  .then((data) => show(data));

/* function show(data) {
  const div = document.getElementById("display");
  for (s of data) {
    const p = document.createElement("p");
    p.innerText = `${s.title} --- and -- ${s.id} ---${s.body}`;
    div.appendChild(p);
    // console.log(s.title);
  }
}
 */
function show(data) {
  const postContainer = document.getElementById("posts");
  for (s of data) {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
    <h3>${s.title}</h3>
    <p>${s.body}</p>

    `;
    postContainer.appendChild(div);
  }
}

function AddAPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "Post",
    body: JSON.stringify({
      title: "my title",
      body: "my body",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
