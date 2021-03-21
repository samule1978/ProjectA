// Get/Set computed css style.
let computedStyle = (elem, attr, val) => {
	if (val) {
		elem.style[attr] = val;
	} else {
		return getComputedStyle(elem)[attr];
	}
};