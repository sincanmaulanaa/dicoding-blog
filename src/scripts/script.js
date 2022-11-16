const hambugerButtonElement = document.querySelector("#hamburger");
const navElement = document.querySelector("#drawer");
const headerElement = document.querySelector("header");
const mainElement = document.querySelector("main");
const heroElement = document.querySelector(".hero");

hambugerButtonElement.addEventListener("click", (e) => {
  navElement.classList.toggle("open");
  e.stopPropagation();
});

headerElement.addEventListener("click", (e) => {
  navElement.classList.remove("open");
  e.stopPropagation();
});

mainElement.addEventListener("click", (e) => {
  navElement.classList.remove("open");
  e.stopPropagation();
});

heroElement.addEventListener("click", (e) => {
  navElement.classList.remove("open");
  e.stopPropagation();
});
