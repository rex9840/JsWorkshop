setTimeout(() => {
  console.log("inside");
  // setTimeout(() => {
  //   console.log("inside 2");
  //   setTimeout(() =>{
  //       console.log("inside 3")
  //   },1000);
  // },1000);
}, 1000);

const button = document.querySelector("button");
// button.addEventListener("click", () => {
addClickEventListener(button, () => {
  console.log("clicked");
});
console.log("outside");

function addClickEventListener(element, callback) {
  element.addEventListener("click", callback);
}
