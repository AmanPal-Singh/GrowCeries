window.lat = 43.472145;
window.lng = -80.548499;

var map = document.createElement('div');
map.setAttribute('style', 'width:600px;height:400px');
var mark;
var lineCoords = [];
  
var initialize = function() {
//   map  = new google.maps.Map(document.getElementById('map-canvas'), {center:{lat:lat,lng:lng},zoom:12});
  map  = new google.maps.Map(map, {center:{lat:lat,lng:lng},zoom:12});
  mark = new google.maps.Marker({position:{lat:lat, lng:lng}, map:map});
  console.log('here');
};

window.initialize = initialize;

var redraw = function(payload) {
  lat = payload.message.lat;
  lng = payload.message.lng;

  map.setCenter({lat:lat, lng:lng, alt:0});
  mark.setPosition({lat:lat, lng:lng, alt:0});
  
  lineCoords.push(new google.maps.LatLng(lat, lng));

  var lineCoordinatesPath = new google.maps.Polyline({
    path: lineCoords,
    geodesic: true,
    strokeColor: '#2E10FF'
  });
  
  lineCoordinatesPath.setMap(map);
};

var pnChannel = "map3-channel";

var pubnub = new PubNub({
  publishKey:   'pub-c-9ccfbc16-8a46-43c1-9f0f-506e1c0423d8',
  subscribeKey: 'sub-c-e46cc53a-d71e-11e9-aa3a-6edd521294c5'
});

pubnub.subscribe({channels: [pnChannel]});
pubnub.addListener({message:redraw});

setInterval(function() {
  pubnub.publish({channel:pnChannel, message:{lat:window.lat + 0.001, lng:window.lng + 0.001}});
},5000);

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyAbOLN1aMoFnh0HijVA7aLlcjZDZql1Hsk",
authDomain: "growceries-c3a40.firebaseapp.com",
databaseURL: "https://growceries-c3a40.firebaseio.com",
projectId: "growceries-c3a40",
storageBucket: "growceries-c3a40.appspot.com",
messagingSenderId: "470631346708",
appId: "1:470631346708:web:b57e7a1767d671f8ba6d01"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();