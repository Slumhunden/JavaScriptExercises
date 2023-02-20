window.addEventListener("load",start);

function start(){
    document.querySelector("#blue_sprite").addEventListener("click",fallover);
}
function fallover(){
    document.querySelector("#blue_sprite").classList.add("fallover");
    document.querySelector("#blue_sprite").removeEventListener("click",fallover);
}