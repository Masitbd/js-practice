function fooBar(input) {
  for (let i = 1; i < 10; i++) {
    const element = i;
    console.log(element);
    if (i % 3 == 0) {
      console.log("foo");
    } else if (i % 5 == 0) {
      console.log("bar");
    } else {
      console.log("foobar");
    }
  }
}

const result = fooBar(10);
//console.log(result);
