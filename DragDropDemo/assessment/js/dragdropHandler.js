var app= function(){
	this.draggedDiv= document.getElementById("draggedDiv");
	this.containerDiv= document.getElementsByClassName("containerDiv")[1];

	this.computeTotalPrice(0);
}

app.prototype= {
	constructor: myApp,

	dragStart: function(e){
		e.dataTransfer.setData("text", e.target.id);
	},

	dragOver: function(e){
		e.preventDefault();
		e.dataTransfer.dropEffect= "move";
	},

	dropOnDraggedDiv: function(e){
		e.preventDefault();
		let id= e.dataTransfer.getData("text");
		this.draggedDiv.appendChild(document.getElementById(id));
	},

	dropOnContainerDiv: function(e){
		e.preventDefault();
		let id= e.dataTransfer.getData("text");
		this.containerDiv.appendChild(document.getElementById(id));
	},

	computeTotalPrice: function(){
		var totPrice=0;
		let priceBlocks= this.draggedDiv.getElementsByClassName("priceBlock");
		for(let i=0; i<priceBlocks.length; i++){
			totPrice+= Number((priceBlocks[i].innerText).replace(",",""));
		}
		this.updateInputValues(totPrice);
	},

	updateInputValues: function(totPrice){
		var amtInput= document.getElementById("amount");
		var priceInput= document.getElementById("price");
		var taxInput= document.getElementById("tax");
		var totInput= document.getElementById("total");

		var amount= Number(amtInput.value);
		var tax= totPrice * (125/1000)
		priceInput.value= totPrice.toFixed(2);
		taxInput.value= tax;
		totInput.value= amount+ totPrice + tax;
	},

	dragEnd: function(e){
		this.computeTotalPrice();
	},

	amountChange: function(e){
		this.computeTotalPrice();
	}
}

var myApp= new app();
