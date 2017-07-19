function app(){
	this.imgArray= ["./images/img1.JPG", "./images/img2.JPG", "./images/img3.JPG", "./images/img4.JPG"];

	this.sliderWrapper= document.getElementById("sliderWrapper");

	this.activeIndex= 0;

	this.prevButton= document.getElementsByClassName("previousBtn")[0];

	this.nextButton= document.getElementsByClassName("nextBtn")[0];

	this.getSliderPosition();

	this.renderGallery();

	this.handleMouseMove= this.handleMouseMove.bind(this);
}

app.prototype= {
	constructor: app,

	renderGallery: function(){
		var width= 0;
		for(let i=0; i< this.imgArray.length; i++){
			width+= 1000;
			this.sliderWrapper.appendChild(this.getImageElement(this.imgArray[i], i)); 
		}
		this.sliderWrapper.style.width= width + "px";
		this.updateGallery();
	},

	getSliderPosition: function(){
		var sliderPosition= document.getElementsByClassName("parentWrapper")[0].getBoundingClientRect();
		this.sliderMidPosition= (sliderPosition.left+ sliderPosition.right)/2
	},

	updateGallery: function(){
		this.handleButtons();

		this.renderActiveImage();
	},

	handleButtons: function(){
		if(this.activeIndex === 0){
			this.prevButton.classList.add("disabled");
		}
		else{
			this.prevButton.classList.remove("disabled");
		}
		if(this.activeIndex === (this.imgArray.length - 1)){
			this.nextButton.classList.add("disabled");
		}
		else{
			this.nextButton.classList.remove("disabled");
		}
	},
	
	renderActiveImage: function(){
		for(let i=0; i< this.imgArray.length; i++){
			var element= document.getElementById(i);
			element.classList.remove("active");

			if(this.activeIndex === i){
				element.classList.add("active");
			}
		}
		var selectedImg= document.getElementById(this.activeIndex);
		selectedImg.classList.add("active");
	},

	getImageElement: function(imgUrl, index){
		var span= document.createElement("span");
		span.setAttribute("id", index);
		var img= document.createElement("img");
		img.src= imgUrl;
		span.appendChild(img);
		return span;
	},

	handlePreviousBtn:function(){
		this.activeIndex--;
		this.updateGallery();
	},

	handleNextBtn: function(){
		this.activeIndex++;
		this.updateGallery();
	},

	handleSliderMouseDown: function(e){
		e.preventDefault();
		var targetElement= e.target;
		if(e.clientX > this.sliderMidPosition){
			this.direction="rightToLeft";		
		}
		else if(e.clientX < this.sliderMidPosition){
			this.direction="leftToRight";
		}
		document.addEventListener("mouseup", function(e){
			targetElement.removeEventListener("mousemove", this.handleMouseMove);
		}.bind(this));
		targetElement.addEventListener("mousemove", this.handleMouseMove);
	},

	handleMouseMove: function(e){
		e.preventDefault();
		if(e.clientX > this.sliderMidPosition-50 && e.clientX < this.sliderMidPosition+50){
			if(this.direction === "rightToLeft"){
				if(this.activeIndex+1 !== this.imgArray.length){
					document.getElementById(this.activeIndex+1).classList.add("nextActive");
				}
				
				document.getElementById(this.activeIndex).classList.add("prevActive");
			}
			else if(this.direction === "leftToRight"){
				if(this.activeIndex-1 >= 0){
					document.getElementById(this.activeIndex-1).classList.add("prevActive");
				}
				
				document.getElementById(this.activeIndex).classList.add("nextActive");
			}
		}
		else{
			if(e.clientX < this.sliderMidPosition-50 && this.direction === "rightToLeft"){
				this.activeIndex+= 1;
				if(this.activeIndex-1 >= 0){
					document.getElementById(this.activeIndex-1).classList.remove("prevActive");
					document.getElementById(this.activeIndex).classList.remove("nextActive");
				}
				
				document.getElementById(this.activeIndex-1).classList.remove("active");
				document.getElementById(this.activeIndex).classList.add("active");
			}
			else if(e.clientX > this.sliderMidPosition+50 && this.direction === "leftToRight"){
				this.activeIndex-= 1;
				if(this.activeIndex+1 !== this.imgArray.length){
					document.getElementById(this.activeIndex+1).classList.remove("nextActive");
					document.getElementById(this.activeIndex+1).classList.remove("active");
				}
				document.getElementById(this.activeIndex).classList.remove("prevActive");
				
				document.getElementById(this.activeIndex).classList.add("active");
			}
			this.handleButtons();
		}
	}

}

var myApp= new app();