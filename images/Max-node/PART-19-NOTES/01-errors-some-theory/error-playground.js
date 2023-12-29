const sum = (a, b) => {
  if (a && b) {
    return a + b;
  }

  // here we are throwing the Err, if we don't handle, application will be crashed
  throw new Error('Invalid arguments');
};

try {
  console.log(sum(1));
} catch (error) {
  // here we are handling the Err, so application will not be crashed
  console.log('Error occurred!');
}

// console.log(sum(1));
console.log('This works!');
