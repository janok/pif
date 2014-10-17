/**
 *
 */
$(document).ready(function() {
    $.ajax({
        url: "http://bouvet-code-camp.azurewebsites.net/api/game/pif/hentmeldinger/4c97faa"
    }).then(function(data) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
            $('.type' + i).append(data[i].type);
            $('.innhold' + i).append(data[i].innhold);
            $('.lagId' + i).append(data[i].lagId);
            $('.tid' + i).append(data[i].tid);
        }
    });
    var map = initializeMap();
    setMyPositionMarker(map);

    $("#postKodeForm").submit(function(event) {

        var postnummer = $(this).find( "input[name='postnummer']" ).val();
        var kode = $(this).find( "input[name='kode']" ).val();
        console.log(postnummer);
        var data = JSON.stringify(
            {
                Kode: kode,
                Postnummer: postnummer,
                LagId: "4c97faa" 
            });
        
        console.log(data);
        sendPostKode(event, data);       
    });
});

function sendPostKode(event, data) {
    event.preventDefault();
    
    console.log(data);
    var postData = data;
    $.ajax({
        url :  "http://bouvet-code-camp.azurewebsites.net/api/game/pif/sendpostkode",
        type : 'POST',
        data : postData
        
    });
    
}

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


