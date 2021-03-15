// Dynamic FavIcon Funtionality
let switchFavIcon = (state) => {
	console.log(state);
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
		document.body.classList.contains('mode--light')
			? "light"
			: "dark"
	);
};
const modeBtn = document.querySelector(".switch__btn");
modeBtn.addEventListener("click", () => switchMode(modeBtn));

const gridContainer = document.querySelector(".grid-container");
const gridContainerShadowDefault = css(gridContainer, "box-shadow");
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
		css(elem, "transform", `translateX(${_mouseXCentrePos}px)`);
	} else {
		css(elem, "transform", `translateX(0px)`);
	}
};

/*document.addEventListener("mousemove", (e) =>
	parallaxContainerShadow(e, gridContainer)
);*/
