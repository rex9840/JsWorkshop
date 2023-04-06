function test() {
  console.log("hi 1");
  console.log("hi 2");
  setTimeout(() => console.log("hi 3"), 10);
  setTimeout(() => console.log("hi 4"), 0);
  console.log("hi 5");
}

test();
console.log("hi 6");

//js is in the middle of running  running test task so says do it when find the time to do it.
