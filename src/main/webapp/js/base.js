/**
 *
 */
$(document).ready(function() {
            var callAjax = function(){
                sendPifPosition(0,0);8
            }
    setInterval(callAjax,5000);
});
$(document).ready(function() {
    $.ajax({
        url: "http://bouvet-code-camp.azurewebsites.net/api/game/pif/erinfisert/4c97faa"
    }).then(function(data) {
        console.log(data);
        if (data) {
            $('.infisert').append('TRUE');
        } else {
            $('.infisert').append('FALSE');
        }
    });

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

    $("#postKodeForm").submit(function(event) {

        var postnummer = $(this).find( "input[name='postnummer']" ).val();
        var kode = $(this).find( "input[name='kode']" ).val();
        //var position = getCurrentPosition();
        //console.log(position);
        console.log(postnummer);
        console.log(kode);

       


        if(navigator.geolocation) {
            console.log('yes');
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log('hihihi');
                var data = JSON.stringify(
                    {
                        Kode: kode,
                        Postnummer: postnummer,
                        Koordinat : 
                        {
                            Longitude : (position.coords.longitude).toString(),
                            Latitude : (position.coords.latitude).toString(),
                            X : 0,
                            Y : 0
                        },
                        LagId: "4c97faa"
                    });
                
                console.log(data);
                sendPostKode(event, data);
                return false;
            });
        }
         event.preventDefault();
    });
    return false;
});

function sendPifPosition(event, data){
    //event.preventDefault();
    console.log("hello world");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var postPosition = data;
            var data = JSON.stringify(
                {
                 Posisjon : {
                     Longitude: (position.coords.longitude).toString(),
                     Latitude: (position.coords.latitude).toString(),
                     X : 0,
                     Y : 0
                 },
                    LagId : "4c97faa"
                });
            
            
            $.ajax({
                url : "http://bouvet-code-camp.azurewebsites.net/api/game/pif/sendpifposisjon",
                type : 'POST',
                
                data :  data
                
            });
        });
    }
}

function sendPostKode(event, data) {
    event.preventDefault();

    console.log(data);
    var postData = data;
    $.ajax({
        url :  "http://bouvet-code-camp.azurewebsites.net/api/game/pif/sendpostkode",
        type : 'POST',
        contentType:"application/json; charset=utf-8",
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

function getCurrentPosition() {
    if(navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(function(position) {
            return position;
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


