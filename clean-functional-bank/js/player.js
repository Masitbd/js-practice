function setPlayerStyle(player) {
  player.style.border = "1px solid red";
}
const players = document.getElementsByClassName("player");
console.log(players.item.name);

for (const player of players) {
  player.addEventListener("clicked", function () {
    console.log("cliked");
    player.style.color = "green";
  });
}

/* function addPlayer() {
  const playersContainer = document.getElementById("players");
  const player = document.createElement("div");
  console.log(player);
  player.classList.add("player");
  // console.log(player.classList.add("player"));
  player.innerHTML = ` 
  <h4 class="player-name">player- 1</h4>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
  </p>
  `;
  playersContainer.appendChild(player);
}
 */

document.getElementById("players").addEventListener("click", function (e) {
  if (e.target.tagName.toLowerCase() == "div") {
    event.target.style.color = "blue";
  }
});
