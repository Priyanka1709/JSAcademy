function app(){
	this.locationBox= document.getElementById('location');

	this.username= document.getElementById('username');
}

app.prototype={
	constructor: app,

	initialize: function(){
		debugger;
		var username;
		if(username= localStorage.getItem("username")){
			this.username.value= username;
		}
	},

	updateLocation: function(e){
		e.preventDefault();
		if(Modernizr.geolocation){
			navigator.geolocation.getCurrentPosition(function(position){
				var geocoder = new google.maps.Geocoder;
				var latlng = {lat: position.coords.latitude, lng: position.coords.longitude};
				geocoder.geocode({'location': latlng}, function(results, status) {
		          this.locationBox.value= results[0].formatted_address;      
		        }.bind(this));
			}.bind(this), function(error){
				this.locationBox.value= error.message;
			}.bind(this));
		}
		else{
			this.locationBox.value= "GeoLocation not supported";
		}
	},

	updateLocalStorage: function(e){
		if(e.target.checked){
			localStorage.setItem("username", this.username.value);
		}
		else{
			localStorage.removeItem("username");
		}
	}
}

var myApp= new app();