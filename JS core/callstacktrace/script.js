// ----------   STACK TRACE & CALL STACK  ---------------------

function doStuff(a, b, name) {
  print(sum(a, b));
  print(sayHi(name));
}

function print(variable) {
  console.log(variable);
}

function sum(a, b) {
  // asdasds;
  return a + b;
}

function sayHi(name) {
  return "Hi" + name;
}

doStuff(1, 2, "swikrit");
