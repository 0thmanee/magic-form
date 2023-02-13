const arrow = document.querySelector(".arrow");
const forms = document.querySelector(".forms");
const btns = document.querySelectorAll(".btn");
const signInInputs = document.querySelectorAll(".sign-in-input");
const loginInputs = document.querySelectorAll(".login-input");
let activeInputs = signInInputs;

// Switch
arrow.addEventListener("click", function () {
  forms.classList.toggle("rotate");
  arrow.classList.toggle("moveLeft");
  arrow.classList.toggle("moveRight");
  if (forms.classList.contains("rotate")) {
    activeInputs = loginInputs;
  } else {
    activeInputs = signInInputs;
  }
  btns.forEach((btn) => {
    btn.classList.remove("goLeft");
    btn.classList.remove("goRight");
  });
});
// Function to check inputs's values
const empty = function () {
  let i = 0;
  activeInputs.forEach((inp) => {
    if (inp.value == "") i++;
  });
  return i;
};
// Empty inputs
btns.forEach((btn) => {
  btn.addEventListener("mouseover", function () {
    if (empty()) {
      if (btn.classList.contains("goLeft")) {
        btn.classList.remove("goLeft");
        btn.classList.add("goRight");
      } else {
        btn.classList.remove("goRight");
        btn.classList.add("goLeft");
      }
      i = 0;
    }
  });
});
/* const obsCallBack = function (entries) {
  const [entry] = entries;
  console.log(entry.isIntersecting, empty());
  if (entry.isIntersecting && !empty()) {
    btns.forEach((btn) => {
      btn.classList.remove("goLeft");
      btn.classList.remove("goRight");
    });
  }
};
const observer = new IntersectionObserver(obsCallBack, {
  root: null,
  threshold: 0,
});
activeInputs.forEach((inp) => observer.observe(inp)); */
