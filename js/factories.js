angular.module('app').factory('contactFactory',['$firebaseArray', '$firebaseObject', function($firebaseArray, $firebaseObject){
	var config = {
		apiKey: "AIzaSyBsVzHAEPXrhcbo3qKcOqHadFEk58VhsI0",
		authDomain: "brilliant-torch-9248.firebaseapp.com",
		databaseURL: "https://brilliant-torch-9248.firebaseio.com",
		storageBucket: "brilliant-torch-9248.appspot.com",
		messagingSenderId: "936020393527"
	};
	firebase.initializeApp(config);
	var ref = firebase.database().ref("contacts");

	return {
		list: function() {
		    return $firebaseArray(ref);
    },
		contact: function(id){
			var contact = ref.child(id);
			return $firebaseObject(contact);

		},
		delete: function(id){
			var contact = $firebaseObject(ref.child(id));
			contact.$remove().then(function(ref) {
  			console.info("ELiminado ", ref )
				}, function(error) {
  			console.log("Error:", error);
				});
		} 
	};

}]);

	
//	playersRef.orderByChild("name").equalTo("John").on("child_added", function(data) {
//   console.log("Equal to filter: " + data.val().name);
//});