function app(){
	this.imgArray= ["./images/img1.JPG", "./images/img2.JPG"];

	this.sliderWrapper= document.getElementById("sliderWrapper");

	this.renderGallery();
}

app.prototype= {
	constructor: app,

	renderGallery: function(){
		for(let i=0; i< this.imgArray.length; i++){
			this.sliderWrapper.appendChild(this.getImageElement(this.imgArray[i])); 
		}
	},

	getImageElement: function(imgUrl){
		var span= document.createElement("span");
		var img= document.createElement("img");
		img.src= imgUrl;
		span.appendChild(img);
		return span;
	}
}

var myApp= new app();