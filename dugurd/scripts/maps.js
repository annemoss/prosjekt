function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(60.860029, 8.516518),
        zoom:5,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }