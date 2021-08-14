function bestFriend(input) {
  let container = friends[0];
  for (friend of friends) {
    if (friend.length > container.length) {
      container = friend;
    }
    // console.log(friend);
  }
  return container;
}

let friends = [
  "karim dsdssd weeww wqweweqdwe qweq",
  "rahim",
  "mamun jordar",
  "murad sarker kamu",
  "kabir",
  "md rahmat ullah sen hamer",
];
const result = bestFriend(friends);
console.log(result);
