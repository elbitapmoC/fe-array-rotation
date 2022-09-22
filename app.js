let arrays = Array.from(document.getElementsByClassName("box"));
let container = document.querySelector(".boxes");
let rightBtn = document.getElementById("right");
let leftBtn = document.getElementById("left");

leftBtn.addEventListener("click", () => {
  let rotate = document.getElementById("rotateBy");
  rotateArray("L", arrays, (rotate = 1));
});
rightBtn.addEventListener("click", () => {
  let rotate = document.getElementById("rotateBy");
  rotateArray("R", arrays, (rotate = 1));
});

function reverseArr(arr, start, end) {
  console.log(start);
  console.log(end);
  while (start < end) {
    console.log(arr[start]);
    console.log(arr[end]);

    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function rotateArray(dir, arr, r) {
  const length = arr.length - 1;
  console.log("reversing");
  arr.reverse();
  console.log("reversed", arr);
  console.log("sending arr to function");
  reverseArr(arr, 0, r - 1);
  console.log("first reverse complete..");
  // reverseArr(arr, r, length);
