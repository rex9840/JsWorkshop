/*
const promise = new Promise((resolve, reject) => {
  const sum = 1 + 1;

  if (sum === 2) {
    resolve("sum");
  } else {
    reject("error");
  }
});

//-----delete after this all dwon   and do condin yourself
promise
  .then((message) => {
    console.log(message);
  })

  .catch((message) => {
    console.error(message);
  });

  */

// call back hell
// setTimeout(() => {
//   console.log("1");
//   setTimeout(() => {
//     console.log("2");
//     setTimeout(() => {
//       console.log("3");
//     }, 250);
//   }, 250);
// }, 250);

setTimeoutPromise(250)
  .then(() => {
    console.log("1");
    return setTimeoutPromise(250);
  })
  .then(() => {
    console.log("2");
    return setTimeoutPromise(250);
  });

function setTimeoutPromise(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}
