let secWrite = document.querySelector(".sec-write");
let output = document.querySelector(".output");

function typePrint(text) {
  let div = document.createElement("div");
  output.appendChild(div);

  let i = 0;
  function type() {
    if (i < text.length) {
      div.textContent += text[i];
      i++;
      setTimeout(type, 20); // speed
    }
  }
  type();
}
typePrint("Hello User Wellcome to Mini Shell...");

let currentInput = "";
let history = [];
let historyIndex = -1;

document.addEventListener("keydown", function (e) {
  if (e.key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
  } else if (e.key === "Enter") {
    print("> " + currentInput);

    if (currentInput.trim() !== "") {
      history.push(currentInput);
      historyIndex = history.length;
    }

    handleCommand(currentInput);
    currentInput = "";
  } else if (e.key === "ArrowUp") {
    if (historyIndex > 0) {
      historyIndex--;
      currentInput = history[historyIndex];
    }
  } else if (e.key === "ArrowDown") {
    if (historyIndex < history.length - 1) {
      historyIndex++;
      currentInput = history[historyIndex];
    } else {
      currentInput = "";
    }
  } else if (e.key.length === 1) {
    currentInput += e.key;
  }

  secWrite.textContent = currentInput;
});

function handleCommand(cmd) {
  if (cmd === "help") {
    print("MiniShell v1.0");
    print("Available commands:");
    print("help, clear, hello, date, time, theme");
  } else if (cmd === "clear") {
    output.innerHTML = "";
  } else if (cmd === "date") {
    print(new Date().toString());
  } else if (cmd === "hello") {
    print("Hey there...!!! Whats up");
  } else if (cmd.startsWith("theme")) {
    let theme = cmd.split(" ")[1];

    document.body.classList.remove("theme-green", "theme-white", "theme-red");

    if (theme === "green") {
      document.body.classList.add("theme-green");
      print("Switched to green theme");
    } else if (theme === "white") {
      document.body.classList.add("theme-white");
      print("Switched to white theme");
    } else if (theme === "red") {
      document.body.classList.add("theme-red");
      print("Switched to red theme");
    } else {
      print("Usage: theme green | white | red");
    }
  } else if (cmd.trim() === "") {
  } else if (cmd === "time") {
    print(new Date().toLocaleTimeString());
  } else {
    print("Command not found: " + cmd);
  }
}

function print(text) {
  let div = document.createElement("div");
  div.textContent = text;
  output.appendChild(div);
}
console.log("This Project is made for fun purpose only...!!!")