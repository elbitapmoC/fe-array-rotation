let arrays = Array.from(document.getElementsByClassName("box"));
let container = document.querySelector(".boxes");
let rightBtn = document.getElementById("right");
let leftBtn = document.getElementById("left");

leftBtn.addEventListener("click", () => {
  let rotate = document.getElementById("rotateBy").value;
  rotateArray("L", arrays, rotate);
});

rightBtn.addEventListener("click", () => {
  let rotate = document.getElementById("rotateBy").value;
  rotateArray("R", arrays, rotate);
});

function forwardArr(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function backwardArr(arr, start, end) {
  while (end < start) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start--;
    end++;
  }
}

function rotateArray(dir, arr, r) {
  const length = arr.length - 1;
  arr.reverse();
  if (dir === "R") {
    forwardArr(arr, 0, r - 1);
    forwardArr(arr, r, length);
    container.innerHTML = arr
      .map((element) => {
        return element.outerHTML;
      })
      .join(" ");
  } else {
    backwardArr(arr, length, r);
    backwardArr(arr, r - 1, 0);
    container.innerHTML = arr
      .map((element) => {
        return element.outerHTML;
      })
      .join(" ");
  }
}
