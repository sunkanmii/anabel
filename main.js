window.onload = function () {
	let displayPage = setTimeout(addEventsAfterLoader, 3000);
}

const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const mainTag = doc.querySelector("main");
const loader = doc.querySelector(".loader_section");

menuOpen.addEventListener("click", () => {
	overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
	overlay.classList.remove("overlay--active");
});

function addEventsAfterLoader(){
	mainTag.style.animation = "move-body 2.5s ease 2s forwards";
	loader.style.display = "none";
}
