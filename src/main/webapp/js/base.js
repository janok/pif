/**
 *
 */
$(document).ready(function() {
    $.ajax({
        url: "http://bouvet-code-camp.azurewebsites.net/api/game/pif/hentmeldinger/55"
    }).then(function(data) {
        $('.navn').append(data.navn);
    });
});