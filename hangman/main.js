$(document).ready(() => {
  const mysteryWord = "STRANGER"
  const letterTag = "td"

  document.querySelectorAll("#keyboard td").forEach(element => {
    element.addEventListener("click", alphabetClick)
  });

  const mysteryWordElement = document.querySelector("#mysteryWord tr")
  for (let i = 0; i < mysteryWord.length; i++) {
    mysteryWordElement.appendChild(document.createElement(letterTag))
  }

  function showTheLetters(letter) {
    let index = mysteryWord.indexOf(letter)
    while (index > -1) {
      mysteryWordElement.children[index].innerText = letter
      index = mysteryWord.indexOf(letter, index+1)
    }
  }

  function showTheHangman() { }

  function alphabetClick(event) {
    const letterElement = event.target
    if (letterElement.classList.contains("selected-letter")) {

    }
    else {
      letterElement.classList.add("selected-letter");
      const letter = letterElement.innerText
      mysteryWord.includes(letter) ? showTheLetters(letter) : showTheHangman();
    }
  }
});
