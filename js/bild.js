var aaa = document.getElementById("pictures");
var pic = ["http://imageshack.us/a/img802/6789/67421141.jpg", "http://imageshack.us/a/img215/9328/79785763.jpg", "http://imageshack.us/a/img819/1048/75963398.jpg"];
var counter = 0;
var currentPic;
var displayPic;

	function delay() {
		//alert("det funkjar");
		setInterval(display(), 500);
		//var tjena = document.getElementById("lol").src = pic[0];
		counter +=1;
		console.log(counter);
	}	

	function display(displayPic) {
		
		displayPic = document.getElementById("lol").src = pic[counter];
		
	};
	

//document.getElementById("lol").src = pic[0];
//document.getElementById("idOnImageElement").src = img_arr[counter];