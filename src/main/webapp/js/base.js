/**
 *
 */
$(document).ready(function() {
    $.ajax({
        url: "http://bouvet-code-camp.azurewebsites.net/api/game/pif/hentmeldinger/4c97faa"
    }).then(function(data) {
        var length = data.length;
        for (var i = 0; i < data.length; i++) {
            console.log(length - i + " - " + data[i].innhold);
            $('.type' + (length - i)).append(data[i].type);
            $('.innhold' + (length - i)).append(data[i].innhold);
            $('.lagId' + (length - i)).append(data[i].lagId);
            $('.tid' + (length - i)).append(data[i].tid);
        }
    });
    var map = initializeMap();
    setMyPositionMarker(map);
});

function initializeMap() {
    
    var mapOptions = {
        center: { lat: 60, lng: 9},
        zoom: 16
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    setCurrentPosition(map);
    return map;
}


function setCurrentPosition(map) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.setCenter(initialLocation);
        });
    }
}

function setMyPositionMarker(map) {
   
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            myLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var marker = new google.maps.Marker({
                position: myLocation,
                title:"Kor i svartre er eg?"
            });

            
            marker.setMap(map);
            map.setCenter(myLocation);
        });
    }
    
}


