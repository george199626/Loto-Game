let main = document.querySelector(".main");
let start = document.querySelector(".start");
let restart = document.querySelector(".restart");
let overlay = document.querySelector(".overlay");
let result = document.querySelector(".result");
for (let i = 1; i < 37; i++) {
  let lotoNumber = document.createElement("div");
  lotoNumber.classList.add("lotoNumber");
  lotoNumber.innerText = i;
  main.appendChild(lotoNumber);
}

let arr = document.querySelectorAll(".lotoNumber");
let counter = 0;
start.disabled = true;

for (let i of arr) {
  i.addEventListener("click", function () {
    if (counter != 6) {
      if (this.classList[1] != "checked") {
        this.style.backgroundColor = "green";
        this.classList.add("checked");
        counter++;
      } else {
        this.style.backgroundColor = "white";
        this.classList.remove("checked");
        counter--;
      }
    } else if (counter == 6 && this.classList[1] == "checked") {
      this.style.backgroundColor = "white";
      this.classList.remove("checked");
      counter--;
    }
    if (counter == 6) {
      start.disabled = false;
      start.style.backgroundColor = "green";
    } else {
      start.disabled = true;
      start.style.backgroundColor = "grey";
    }
  });
}

let copyOfMyNumbers = [];
start.addEventListener("click", function () {
  let wincounter = 0;
  let randArr = [];
  let mynumbers = document.querySelectorAll(".checked");
  copyOfMyNumbers = mynumbers;
  let numbarr = [];
  for (let i of mynumbers) {
    numbarr.push(i.innerText);
  }
  while (randArr.length != 6) {
    let randNumber = parseInt(Math.random() * 36 + 1);
    if (randArr.indexOf(randNumber) == -1) {
      randArr.push(randNumber);
    }
  }
  console.log(randArr, numbarr);
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (numbarr[i] == randArr[j]) {
        wincounter++;
        overlay.classList.remove("hidden");
        result.innerText = wincounter + " " + "numbers matched !";
      } else if (wincounter == 6) {
        overlay.classList.remove("hidden");
        result.innerText =
          wincounter + " " + "numbers matched ! You won 20 000$ !";
      } else if (wincounter == 0) {
        result.innerHTML = "0 numbers matched !";
        overlay.classList.remove("hidden");
      }
    }
  }
  console.log(wincounter);
});

restart.addEventListener("click", function () {
  for (let i of copyOfMyNumbers) {
    i.classList.remove("checked");
    i.style.backgroundColor = "white";
    counter = 0;
    start.disabled = true;
    start.style.backgroundColor = "gray";
    overlay.classList.add("hidden");
  }
});
