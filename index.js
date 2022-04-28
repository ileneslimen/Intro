// selectors

var title = document.getElementsByTagName("h1");
console.log(title);

// query Selector

var titre = document.querySelector("h1");
// console.log(titre);

//
var main = document.querySelector("#main");
// console.log(main.innerHTML);
// console.log(main.innerText);

// creating element

var btn = document.createElement("button");
btn.innerText = "hello";

main.appendChild(btn);

btn.addEventListener("click", function () {
  //   btn.style.backgroundColor = "red";
  //   btn.setAttribute("class", "color");
  btn.classList.toggle("color");
  btn.classList.add("hi");
  console.log(btn);
});
// event listener

// first thing select the btns

// var plus = document.getElementById("btn-plus");

// plus.addEventListener("click", function () {
//   // parseInt(plus.nextElementSibling.innerHTML) + 1;
//   plus.nextElementSibling.innerHTML++;
// });

//select btn

// var minus = document.getElementById("btn-minus");

// minus.addEventListener("click", function () {
//   // parseInt(minus.previousElementSibling.innerHTML) - 1;

//   if (minus.previousElementSibling.innerHTML > 0)
//     minus.previousElementSibling.innerHTML--;
// });

//selects the btns

var plus = document.querySelectorAll(".btn-plus");
console.log(plus);
var minus = document.querySelectorAll(".btn-minus");
console.log(minus);
// plus[0].addEventListener("click", function () {
//   plus[0].nextElementSibling.innerHTML++;
// });
// plus[1].addEventListener("click", function () {
//   plus[1].nextElementSibling.innerHTML++;
// });
// plus[2].addEventListener("click", function () {
//   plus[2].nextElementSibling.innerHTML++;
// });

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].nextElementSibling.innerHTML++;
  });
}

for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    if (minus[i].previousElementSibling.innerHTML > 0)
      minus[i].previousElementSibling.innerHTML--;
  });
}
