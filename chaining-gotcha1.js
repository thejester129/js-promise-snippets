// wrong
let aThenB = (promise1, promise2) => {
  promise1.then(() => promise2);
};

const promise1 = new Promise((resolve) =>
  setTimeout(() => {
    console.log("1");
    resolve();
  }, 500)
);

aThenB(
  promise1,
  new Promise((resolve) =>
    setTimeout(() => {
      console.log("...then 2");
      resolve();
    }, 100)
  )
);
// ...then 2
// 1

// correct
aThenB = (promise1, promise2) => {
  promise1.then(() => promise2());
};

const promise3 = new Promise((resolve) =>
  setTimeout(() => {
    console.log("3");
    resolve();
  }, 500)
);

aThenB(
  promise3,
  () =>
    new Promise((resolve) =>
      setTimeout(() => {
        console.log("...then 4");
        resolve();
      }, 100)
    )
);
// 3
// ...then 4
