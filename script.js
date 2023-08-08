// let contador = 1;

// setInterval(function () {
//   document.getElementById("slide" + contador).checked = true;
//   contador++;

//   if (counter > 5) {
//     contador = 1;
//   }
// }, 3000);

let count = 1;

// setInterval(function () {
document.getElementById("slide1").checked = true;
setInterval(function () {
  nextImage();
}, 2000);

function nextImage() {
  count++;
  if (count > 5) {
    count = 1;
  }
  document.getElementById("slide" + count).checked = true;
}
