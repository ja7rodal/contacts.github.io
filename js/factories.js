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
	var contacts = $firebaseArray(ref);

	return {
		list: function() {
		    return contacts;
    },
		contact: function(id){
			var contact = ref.child(id);
			return $firebaseObject(contact);

		},
		delete: function(id){
			var contact = $firebaseObject(ref.child(id));
			contact.$remove().then(function(ref) {
  			return true;
				}, function(error) {
  			return error;
				});
		},
		edit: function (contact){
			contact.$save().then(function(ref){
				return true;
			}, function(error) {
  			return error;
		  });
		}
	};

}]);


