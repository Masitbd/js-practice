const getData = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((data) => result(data));
};
getData();

const result = (data) => {
  const showText = document.getElementById("buddis");

  //showText.innerText = data.results[0].dob.age;
  const buddies = data.results;
  buddies.forEach((data) => {
    console.log(data.name);
    const p = document.createElement("p");
    p.innerText = `Dob: ${data.dob.date} Name: ${data.name.title}  ${data.name.first} ${data.name.last} `;
    showText.appendChild(p);
  });
};
