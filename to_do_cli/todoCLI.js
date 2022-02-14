const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ", // the shape of the prompt > also we can put %
});

const theList = [];

function menuPrompt() {
  const theMenu =
    "(v) View. (n) New. (cX) Complete. (dX) Delete. (s) Save . (q) Quit";
  console.log(theMenu);
  rl.prompt();
}

function showList() {
  if (theList.length <= 0) {
    console.log("List is empty...");
  } else {
    theList.forEach((entry, index) => {
      let status = entry.complete === true ? "✔" : " ";
      console.log(`${index} [${status}] ${entry.title}`);
    });
  }
}

function newEntry(entry = "") {
  if (entry === "") {
    console.log("What?");
    rl.prompt();
  } else {
    theList.push({ complete: false, title: entry });
  }
}

function completeItem(num) {
  if (num >= 0 && num < theList.length) {
    theList[num].complete = true;
    console.log(`Completed "${theList[num].title}"`);
  }
}

function deleteItem(num) {
  if (num >= 0 && num < theList.length) {
    const deletedItem = theList.splice(num, 1)[0];
    console.log(`Deleted "${deletedItem.title}"`);
  }
}

function saveList(filename = "") {
  if (filename === "") {
    console.log("Where? (myTodos.json)");
    rl.prompt();
  } else {
    fs.writeFileSync(`./${filename}`, JSON.stringify(theList));
    console.log(`List saved to "${filename}"`);
  }
}

if (process.argv.length === 3) {
  const inputFilename = process.argv[2];
  fs.readFile(inputFilename, "utf8", (err, data) => {
    const todos = JSON.parse(data);
    todos.forEach((todo) => {
      theList.push(todo);
    });
  });
}
console.log("Welcome to Todo CLI!\n--------------------");
menuPrompt();

let curCmd = "";
rl.on("line", (input) => {
  if (input === "q" && curCmd === "") {
    console.log("See you soon! 😊");
    rl.close();
    return;
  } else if (input === "v" && curCmd === "") {
    showList();
    menuPrompt();
  } else if (input === "n" && curCmd === "") {
    curCmd = "n";
    newEntry();
  } else if (curCmd === "n") {
    newEntry(input);
    curCmd = "";
    menuPrompt();
  } else if (input[0] === "c") {
    let num = parseInt(input.slice(1));
    completeItem(num);
    menuPrompt();
  } else if (input[0] === "d") {
    let num = parseInt(input.slice(1));
    deleteItem(num);
    menuPrompt();
  } else if (input === "s" && curCmd === "") {
    curCmd = "s";
    saveList();
  } else if (curCmd === "s") {
    if (input === "") {
      input = "myTodos.JSON";
    }
    saveList(input);
    curCmd = "";
    menuPrompt();
  } else if (curCmd === "") {
    menuPrompt();
  }
});
