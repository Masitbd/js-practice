let results = [1, 2, 3, 4, 2, 4, 5, 6];

function removeDuplicate(results) {
  const unique = [];
  /*  for (let i = 0; i < results.length; i++) {
    const element = results[i];
    console.log(element);
  }
} */

  for (let element of results) {
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  }
  return unique;
}

const unikNames = removeDuplicate(results);
console.log(unikNames);
