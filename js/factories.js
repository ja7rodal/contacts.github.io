angular.module('app').factory('contactFactory',['$firebaseArray', function($firebaseArray){
	var config = {
		apiKey: "AIzaSyBsVzHAEPXrhcbo3qKcOqHadFEk58VhsI0",
		authDomain: "brilliant-torch-9248.firebaseapp.com",
		databaseURL: "https://brilliant-torch-9248.firebaseio.com",
		storageBucket: "brilliant-torch-9248.appspot.com",
		messagingSenderId: "936020393527"
	};
	firebase.initializeApp(config);	
	var ref = firebase.database().ref("contacts").orderByChild("name");
	// create a synchronized array
	return {
		list: function() {
      return $firebaseArray(ref);
    },
		contact: function(id){
				$firebaseArray(ref).$loaded()
					.then(function (contacts) {  
						return  contacts.$getRecord(id); 
					}
			);
		}
	};

}]);
