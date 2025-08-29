// console.log(document);

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
// const heartBtns = document.getElementsByClassName("heart-btn");
// for (let heartButton of heartBtns) {
//   heartButton.addEventListener("click");
// }

// let count = 0;
// const button = document.getElementById("heart");
// const counter = document.getElementById("heart-count");
// button.addEventListener("clicked", () => {
//   count++;
//   counter.textContent = "heart-count" + count;
// });
// console.log(heart - count);

// let clickCount = 0;
// const heartButton = document.getElementById("heartButton");
// const heartCount = document.getElementById("heartCount");

// heartButton.addEventListener("click", function () {
//   clickCount++;
//   heartCount.textContent = clickCount;
// });

getElement("services-box").addEventListener("click", function (e) {
  if (e.target.className.includes("copyBtn")) {
    displayElement.textContent = e.target.title;
  }
  console.log(this.title);
});
// ==============================================
// document.getElementsByClassName("heartBtn");

// for (let i = 0; i < heartBtn.length; i++) {
//   heartBtn[i].addEventListener("click", function () {
//     console.log("btn clicked");
//   });
// }

// heart btn clicked
let heartBtns = document.querySelectorAll(".heartBtn");
let clickedCount = 0;
heartBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    clickedCount++;
    heartCount.textContent = clickedCount;
  });
});

// copy btn clicked
let copyBtns = document.querySelectorAll(".copyBtn");
let clickCount = 0;
copyBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    clickCount++;
    copyCount.textContent = clickCount;
  });
});

// call btn clicked
