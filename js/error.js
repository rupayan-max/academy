try {
  console.log("I am inside of try block");
  console.log(c);
} catch (err) {
  console.log("I am inside of catch block");
  // console.log("Here is the error=> ",err);
  throw new Error("invalid json"); // for this we can edit error msg and we can generate the error
}
finally{
  console.log("I will run every time");
}