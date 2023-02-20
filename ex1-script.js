window.addEventListener("load", start);
function start() {
  console.log("start");
  document.querySelector("#orange_sprite").addEventListener("click", jump);
}
function jump() {
  document.querySelector("#orange_sprite").classList.add("jump");
  document.querySelector("#orange_sprite").removeEventListener("click", jump);
}
