// Dynamic FavIcon Funtionality
let switchFavIcon = (state) => {
	const favIconLight = "img/SG78Favicon.png";
	const favIconDark = "img/SG78FaviconDark.png";

	var favIcon = document.querySelector("link[rel~='icon']");
	if (!favIcon) {
		favIcon = document.createElement("link");
		favIcon.rel = "icon";
		favIcon.type = "image/x-icon";
		document.getElementsByTagName("head")[0].appendChild(favIcon);
	}
	favIcon.href = state == "light" ? favIconLight : favIconDark;
};

// Global Radio Btn Visiual On Click Funtionality.
document.querySelectorAll('[class*="--radio"]').forEach((radioBtn) => {
	radioBtn.addEventListener("click", () => radioBtn.classList.toggle("on"));
});

// Light/Dark Mode Functionality
let switchMode = (btn) => {
	["light", "dark"].map((state) => {
		document.body.classList.toggle(`mode--${state}`);
	});

	switchFavIcon(
		document.body.classList.contains("mode--light") ? "light" : "dark"
	);
};
const modeBtn = document.querySelector(".switch__btn");
modeBtn.addEventListener("click", () => switchMode(modeBtn));