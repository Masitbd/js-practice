function add(a, b, callback) {
  console.log(`a and b equL ${a + b}`);
  callback();
}

function message() {
  console.log("Add successfully");
}

add(200, 3, message);
