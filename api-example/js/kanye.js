const getData = () => {
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => result(data));
};
getData();

const result = (data) => {
  const showText = document.getElementById("quote");

  showText.innerText = data.quote;
};
