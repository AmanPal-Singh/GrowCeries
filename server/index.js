const express = require('express')
const expressR = express();

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

firebase.initializeApp(config);

// Set up reference to database service
var db = firebase.database();

// Add add to the database function
function writeNewData(sensorID, lat, long, timestamp){
	var sid = sensorID;
	var sidHistory = sensorID + '-' + timestamp;
	firebase.database().ref('sensors').child(sid).set({sensorData: {longitude: long, latitude: lat, timeStamp: timestamp}});
	firebase.database().ref('dataHistory').child(sidHistory).set({timeStamp: timestamp, longitude: long, latitude: lat});
}

/*
writeNewData("sensor-001", 43.473209, -80.540316, "2019-09-14:2203")
writeNewData("sensor-001", 43.473166, -80.540299, "2019-09-14:2204")
writeNewData("sensor-001", 43.473067, -80.540248, "2019-09-14:2205")
writeNewData("sensor-001", 43.473078, -80.540158, "2019-09-14:2206")
writeNewData("sensor-001", 43.473078, -80.540158, "2019-09-14:2210")
writeNewData("sensor-001", 43.473078, -80.540158, "2019-09-14:2212")
writeNewData("sensor-001", 43.473078, -80.540158, "2019-09-14:2214")
writeNewData("sensor-001", 43.473002, -80.540195, "2019-09-14:2216")
writeNewData("sensor-001", 43.473002, -80.540195, "2019-09-14:2218")
writeNewData("sensor-001", 43.472956, -80.540197, "2019-09-14:2219")
writeNewData("sensor-001", 43.472929, -80.540267, "2019-09-14:2220")


writeNewData("sensor-001", 43.472787, -80.540199, "2019-09-14:2232")
writeNewData("sensor-001", 43.472804, -80.540163, "2019-09-14:2234")
writeNewData("sensor-001", 43.472923, -80.540124, "2019-09-14:2235")
writeNewData("sensor-001", 43.473003, -80.540202, "2019-09-14:2236")
writeNewData("sensor-001", 43.473078, -80.540158, "2019-09-14:2240")
writeNewData("sensor-001", 43.473052, -80.540233, "2019-09-14:2242")
writeNewData("sensor-001", 43.473065, -80.540172, "2019-09-14:2244")
writeNewData("sensor-001", 43.473065, -80.540172, "2019-09-14:2246")
writeNewData("sensor-001", 43.473065, -80.540172, "2019-09-14:2248")
writeNewData("sensor-001", 43.473065, -80.540172, "2019-09-14:2249")
writeNewData("sensor-001", 43.473065, -80.540172, "2019-09-14:2259")
*/
