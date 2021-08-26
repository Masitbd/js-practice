/* fetch("https://jsonplaceholder.typicode.com/todos/1") // request
  .then((response) => response.json()) // kisu paisa and convert to json
  .then((json) => console.log(json)); //get back somthing and do console log */

/* function loadDate() {
  fetch("https://jsonplaceholder.typicode.com/todos/1") // request
    .then((response) => response.json()) // kisu paisa and convert to json
    .then((data) => console.log(data.title)); //get back somthing and do console log
} */

function post() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function user() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    // .then((data) => console.log(data[0].address.city));
    .then((data) => displayUsers(data));
}

function displayUsers(data) {
  const ul = document.getElementById("display");
  for (d of data) {
    const li = document.createElement("li");
    // li.innerText = d.name;
    li.innerText = `name: ${d.name} ---- and ${d.email}`;
    ul.appendChild(li);
  }
}
