$(document).ready(() => {
  function alphabetClick(event) {
    event.target.style.backgroundColor = "orangered";
    event.target.style.color = "white";
    event.target.style.border = "none";
  }
  document.querySelectorAll("td").forEach(element => {
    element.addEventListener("click", alphabetClick)
  });
});
