<!DOCTYPE html>
<html>
  <head>
    <style type="text/css">
      html, body, 
      #map-canvas { height: 800px; width: 800px;  margin: 0; padding: 0;}
      
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    
    <script type="text/javascript"
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAnAMY08WLnqlrf9xN6VyDwcWDXu6dwvRM">
    </script>
    <script type="text/javascript" src="js/base.js"></script>
    
    <script type="text/javascript">
     
     
      var map;
      
      
</script>
    
  </head>
  <body>

   

    <p class="infisert">Infisert: </p>

    <div>
      <form action="#" id="postKodeForm">
      Send postkode:
      <input type="text" name="kode" placeholder="Kode"/>
      <input type="text" name="postnummer" placeholder="Postnummer"/>
      <input type="submit" value="Send inn"/>
      </form>
   </div> 
    
  
<a onclick="sendPifPosition()" href="#">

<table width="100%">

    <% for (int i = 0; i < 100; i++) { %>
    <tr>
        <td class="type<%=i%>"></td>
        <td class="innhold<%=i%>"></td>
        <td class="lagId<%=i%>"></td>
        <td class="tid<%=i%>"></td>
    </tr>
    <% } %>

</table>

 <div id="map-canvas"></div>

  </body>
</html>
