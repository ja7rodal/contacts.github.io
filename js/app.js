var config = {
	apiKey: "AIzaSyBsVzHAEPXrhcbo3qKcOqHadFEk58VhsI0",
  authDomain: "brilliant-torch-9248.firebaseapp.com",
  databaseURL: "https://brilliant-torch-9248.firebaseio.com",
  storageBucket: "brilliant-torch-9248.appspot.com",
  messagingSenderId: "936020393527"
};
firebase.initializeApp(config);

var app = angular.module('app', ['ngRoute', 'firebase', 'ui.mask']);

app.factory('factoryApp', function(){
	return {};
});