const a = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log("in async");
};

a();
console.log("async should be done");
