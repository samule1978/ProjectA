let css = (elem, attr, val) => {
	if (val) {
		elem.style[attr] = val;
	} else {
		return getComputedStyle(elem)[attr];
	}
};
//alert(css(document.querySelector(".grid-container"), "box-shadow"));