let switchMode = (btn) => {
	btn.classList.toggle("on");
	["mode--light", "mode--dark"].map((mode) =>
		document.body.classList.toggle(mode)
	);
};

const modeBtn = document.querySelector(".switch__btn");
modeBtn.addEventListener("click", () => switchMode(modeBtn));
