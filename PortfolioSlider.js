var i = 0; // Start Index
var images = ["pic1.png", "pic2.png", "pic3.png", "pic4.png"];
var time = 3000; // in milliseconds, so it'd be 3 seconds.

// Filling the array with images
//images[0] = "pic1.png";
//images[1] = "pic2.png";
//images[2] = "pic3.png";
//images[3] = "pic4.png";

function changeImg() {

	var slide = document.getElementById(slide);
	slide.src = images[i];

	if (i < images.length - 1) {
		i++
	} else {
		i = 0; 
	}

	setTimeout("changeImg()", time);
}

window.onload = changeImg;