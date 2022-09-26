// array
let array = Array.from(document.getElementsByClassName("box"));
// container
const container = document.querySelector(".boxes");
// buttons
const left = document.getElementById("left");
const right = document.getElementById("right");

// Event listener for the ubttons
left.addEventListener("click", () => {
  let rotate = document.getElementById("rotateBy").value;
  rotateArray("L", array, rotate);
});

// Event listener for the ubttons
right.addEventListener("click", () => {
  console.log("clicked");
  let rotate = document.getElementById("rotateBy").value;
  rotateArray("R", array, rotate);
});

function backwards(arr, r) {
  // 1,2,3,4,5
  // 2,3,4,5,1
  console.log("backwards...");
  let firstHalf = arr.slice(r);
  let secondHalf = arr.slice(0, r);
  array = firstHalf.concat(secondHalf);
  container.innerHTML = array
    .map((final) => {
      return final.outerHTML;
    })
    .join(" ");
}

function forwards(arr, r) {
  console.log("forwards...");
  // 1,2,3,4,5
  // 2,3,4,5,1
  let firstHalf = arr.slice(0, r).reverse();
  let secondHalf = arr.slice(r).reverse();
  array = firstHalf.concat(secondHalf);
  container.innerHTML = array
    .map((final) => {
      return final.outerHTML;
    })
    .join(" ");
}

function rotateArray(dir, arr, r) {
  if (dir === "L") {
    backwards(arr, r);
  } else {
    arr.reverse();
    forwards(arr, r);
  }
}
