


if ("geolocation" in navigator){
  navigator.geolocation.getCurrentPosition(function(position){
   var lati = position.coords.latitude; 
   var longi = position.coords.longitude;
  

    function GetAddress() {  
            var lat = parseFloat(lati);  
            var lng = parseFloat(longi);  
            var latlng = new google.maps.LatLng(lat, lng);  
            var geocodergeocoder = geocoder = new google.maps.Geocoder();  
            geocoder.geocode({ 'latLng': latlng }, function (results, status) {  
                if (status == google.maps.GeocoderStatus.OK) {  
                    if (results[1]) {  
                        $('.geo').html( results[0].address_components[2]["short_name" ]+' '+results[0].address_components[3]["short_name" ]);  
                    }  
                }  
            });  
        }  

   GetAddress();
    
   $('.sky').html('latitude: ' +lati.toFixed(2) );  
   $('.wind').html('longitude: '+longi.toFixed(2) ); 
    
  $.getJSON('https://fcc-weather-api.glitch.me/api/current?lat='+lati+'&lon=' +longi,function(a){
  $(".temp").html(a.main.temp.toFixed(2));
  $(".status").html(a.weather[0].main); 
  $(".status").append('<img src = ' + a.weather[0].icon +'>');
});
    
  });
}
else{
  alert("unable to get your location");
}

var count = 1;

$('.cfbutton').on('click',function(){
   if(count % 2 == 1 ){
    var cel = $(".temp").html();
    var far = 32 + cel*1.8;
    $(".temp").html(far.toFixed(2)); 
    $(".cfbutton").html('F'); 
    count++;
   }else if(count % 2 == 0){
    var far = $(".temp").html();
    var cel = (far - 32)/1.8;
    $(".temp").html(cel.toFixed(2)); 
    $(".cfbutton").html('C'); 
    count++;
   }
});