function app(){
	this.tableDiv= document.getElementById("table");
}

app.prototype= {
	constructor: app,

	updateInput: function(e, src, target){
		var srcValue= Number(document.getElementById(src).value);
		document.getElementById(target).value= srcValue;

		if(src.match('row')){
			this.renderTable(srcValue, Number(document.getElementById('colSlider').value));
		}
		else if(src.match('col')){
			this.renderTable(Number(document.getElementById('rowSlider').value), srcValue);
		}
		
	},

	renderTable: function(rows, cols){
		var tableRow, tableCol;

		this.tableDiv.innerHTML= ""; // clearing already present row

		for(let i=0; i< rows; i++){
			tableRow= this.getElement('tableRow');
			this.tableDiv.appendChild(tableRow);
			for(let j=0; j< cols;j++){
				tableCol= this.getElement('tableCol');
				tableRow.appendChild(tableCol);
			}
		}
	},

	getElement: function(className){
		var block= document.createElement("div");
		block.classList.add(className);
		return block;
	}
}

var myApp= new app();