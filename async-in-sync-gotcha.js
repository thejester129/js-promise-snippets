function doThings(function1, function2) {
  function1();
  function2();
}

doThings(
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("first thing");
  },
  () => console.log("second thing")
);

// second thing
// first thing
