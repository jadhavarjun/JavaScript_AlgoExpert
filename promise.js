// using promise is we get an object to decide the action that needs to be taken after the async task completes.
// promise is plain object that have state
// promise state -> pending -> fulfilled -> rejected
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 1000);
});
console.log(promise);

// we have function in promise object called then its takes in callback function has value and then do anything with this value
// and then can also take a second function and purpose of this function is for error msg
promise
  .then(console.log)
  .catch((error) => console.log("ohh no" + error));

//   makes it easier to write promises and it simplifies the syntax and makes the code more readable by avoiding callback nesting and chaining
//   async and await
async function tester() {
    const value = await new Promise((res, rej) => setTimeout(() => res(3), 1000))
    console.log(value)
}

tester()