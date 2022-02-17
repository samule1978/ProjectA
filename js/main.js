const modeBtn = document.querySelector(".switch__btn");

// Dynamic FavIcon Funtionality
let switchFavIcon = (theme) => {
	const favIconLight = "img/SG78Favicon.png";
	const favIconDark = "img/SG78FaviconDark.png";

	var favIcons = document.querySelectorAll("link[rel*='icon']");
	if (!favIcons) {
		favShortcutIcon = document.createElement("link");
		favShortcutIcon.rel = "shortcut icon";
		favShortcutIcon.type = "image/x-icon";
		document.getElementsByTagName("head")[0].appendChild(favShortcutIcon);

		
		favIcon = document.createElement("link");
		favIcon.rel = "icon";
		favIcon.type = "image/x-icon";
		document.getElementsByTagName("head")[0].appendChild(favIcon);

		favIcons = document.querySelectorAll("link[rel*='icon']");
	}
	favIcons.forEach(
		(favIcon) =>
			(favIcon.href = theme == "light" ? favIconLight : favIconDark)
	);
};

// Global Radio Btn Visiual On Click Funtionality.
document.querySelectorAll('[class*="--radio"]').forEach((radioBtn) => {
	radioBtn.addEventListener("click", () => radioBtn.classList.toggle("on"));
});

// Light/Dark Mode Functionality
let switchMode = (theme) => {
	if (theme) {
		if (theme == "light" && document.body.classList.contains("theme--dark")) document.body.classList.remove("theme--dark");
		if (theme == "dark" && !document.body.classList.contains("theme--dark")) document.body.classList.add("theme--dark");

		switchFavIcon(theme);
	} else {
		document.body.classList.toggle("theme--dark");

		switchFavIcon(
			document.body.classList.contains("theme--dark") ? "dark" : "light"
		);
	}
};
modeBtn.addEventListener("click", () => switchMode());

// Automatically set dark/light mode based on user device setting.
let setMode = (dark) => {
	if (dark && !modeBtn.classList.contains("on")) modeBtn.classList.add("on");
	if (!dark && modeBtn.classList.contains("on")) modeBtn.classList.remove("on");
	switchMode(dark ? "dark" : "light");
};
let enableAutoLightDarkMode = () => {
	var devicePreferredColorSchemeIndicator = window.matchMedia("(prefers-color-scheme: dark)");
	
	setMode(devicePreferredColorSchemeIndicator.matches);
	devicePreferredColorSchemeIndicator.addEventListener("change", (e) => {
		setMode(e.matches);
	});
};
enableAutoLightDarkMode();

/*
const gridContainer = document.querySelector(".grid-container");
const gridContainerShadowDefault = computedStyle(gridContainer, "box-shadow");
let parallaxContainerShadow = (e, elem) => {
	let _elem_w = elem.innerWidth;
	let _elem_h = elem.innerHeight;

	let _w = window.innerWidth / 2;
	let _h = window.innerHeight / 2;
	let _mouseX = e.clientX;
	let _mouseY = e.clientY;

	let _mouseXCentrePos = _mouseX - _w;
	console.log(`${_mouseXCentrePos}`);

	if (_mouseXCentrePos >= -100 && _mouseXCentrePos <= 100) {
		computedStyle(elem, "transform", `translateX(${_mouseXCentrePos}px)`);
	} else {
		computedStyle(elem, "transform", `translateX(0px)`);
	}
};
document.addEventListener("mousemove", (e) =>
	parallaxContainerShadow(e, gridContainer)
);
*/
