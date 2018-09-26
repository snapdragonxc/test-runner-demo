function test(title, callback) {
  console.log(title);
  callback();
}

function verify(expected, actual) {
  if (expected === actual) {
    console.log('pass');
  } else {
    console.log('fail');
  }
}

module.exports = { test, verify };
