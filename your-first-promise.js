//Promise
//if you want to perform asynchronous computation always use promises.

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(`The connection was succesful`);
//   }, 3000);

//   setTimeout(() => {
//     reject(`Timed out`);
//   }, 5000);
// });

const newPromise = new Promise((resolve, reject) => {
  Promise.resolve().then(() => {
    let i = 0;
    while (i <= 1_000_000) i++;
    resolve("it has been resolved");
  });
});

newPromise.then((res) => console.log(res)).catch((err) => console.log(err));
// .finally(() => console.log("done"));
