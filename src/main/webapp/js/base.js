/**
 *
 */
/*$(document).ready(function() {
    $.ajax({
        url: "http://bouvet-code-camp.azurewebsites.net/api/game/pif/hentmeldinger/55"
    }).then(function(data) {
        $('.navn').append(data.navn);
    });
});*/

function setCurrentPosition(map) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.setCenter(initialLocation);
        });
    }
}


