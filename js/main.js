let switchMode = (btn) => {
	btn.classList.toggle("on");
	["mode--light", "mode--dark"].map((mode) =>
		document.body.classList.toggle(mode)
	);
};
const modeBtn = document.querySelector(".switch__btn");
modeBtn.addEventListener("click", () => switchMode(modeBtn));

let toggleOnOff = (element) => {
	element.classList.toggle("on");
};
//const radioBtns = [...document.querySelectorAll(`[class^="--radio"]`)];
//radioBtns.addEventListener("click", () => toggleOnOff(radioBtn));
