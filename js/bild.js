var imageSlider = document.getElementById("image-slider");
var pic = ["http://imageshack.us/a/img802/6789/67421141.jpg", "http://imageshack.us/a/img215/9328/79785763.jpg", "http://imageshack.us/a/img819/1048/75963398.jpg"];
var counter = 0;
var displayPic;

	function delay() {
		setInterval(function() {
			display();

			if(counter < pic.length - 1) {
				counter++;
			} else {
				counter = 0;
			}
		}, 5000);
	}	

	function display(displayPic) {
		displayPic = imageSlider.src = pic[counter];
	};

	window.onload = delay();
