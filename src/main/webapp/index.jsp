<!DOCTYPE html>
<html>
  <head>
    <style type="text/css">
      html, body, #map-canvas { height: 100%; margin: 0; padding: 0;}
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript" src="js/base.js"></script>
    <script type="text/javascript"
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAnAMY08WLnqlrf9xN6VyDwcWDXu6dwvRM">
    </script>
    
    <script type="text/javascript">
     
     
      var map;
      function initialize() {
         
        var mapOptions = {
          center: { lat: 60, lng: 5},
          zoom: 16
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
     
        setCurrentPosition(map);
     
      }
      google.maps.event.addDomListener(window, 'load', initialize);
    </script>
    
  </head>
  <body>
<div id="map-canvas"></div>
  </body>
</html>
