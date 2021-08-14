let text = "I love bangladesh";

/* for (let i = text.length; i >= 0; i--) {
  const element = text[i];
  console.log(element);
}
 */

let text = "I love bangladesh";
let reversed = "";
for (let i = text.length - 1; i >= 0; i--) {
  reversed += text[i];
}
console.log(reversed);

/* let text = "Murad hossain sarker";
function reverse(text) {
  let container = "";
  for (const letter of text) {
    //console.log(letter);
    container = letter + container;
  }
  console.log(container);
}

reverse(text); */
