// Dropdown/toggle Navigation

var toggleMenu = document.querySelectorAll(".menu-toggle")[0];
toggleMenu.addEventListener("click", menu, false);
function menu() {
	document.querySelector("body").classList.toggle("open");
}

