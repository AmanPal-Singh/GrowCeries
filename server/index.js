const expressRequire = require('express')
const express = express();

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
var databaseRequire = require("firebase/database");



// Initialize app 
// Set the configuration for your app
  
var config = {
	apiKey: "AIzaSyAbOLN1aMoFnh0HijVA7aLlcjZDZql1Hsk",
    authDomain: "growceries-c3a40.firebaseapp.com",
    databaseURL: "https://growceries-c3a40.firebaseio.com",
    projectId: "growceries-c3a40",
    storageBucket: "growceries-c3a40.appspot.com",
    messagingSenderId: "470631346708",
    appId: "1:470631346708:web:b57e7a1767d671f8ba6d01"
};
var firebase.initializeApp(config);

// Set up reference to database service
var database = firebase.database();

app.get('/', (req, res) => {
	res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});


// Add add to the database function
function writeNewData(sensorID, long, lat timestamp){
	var sensorData = {
		sensorUniqueID: sensorID,
		lastLocation: lastlocation,
		timeStamp: timestamp
	};
}

