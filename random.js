window.addEventListener("load", start);
function start() {
  console.log("start");
  document.querySelector("#orange_sprite").addEventListener("click", jumpOnce);
}
function jumpOnce() {
  document.querySelector("#orange_sprite").classList.add("jump-once");
  document
    .querySelector("#orange_sprite")
    .addEventListener("animationend", resetJump);
}

function resetJump() {
  document.querySelector("#orange_sprite").classList.remove("jump-once")
  document.querySelector("#orange_sprite").addEventListener("click", jumpOnce);
}