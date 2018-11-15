var position = new naver.maps.LatLng(37.499432, 127.033156);

var map = new naver.maps.Map('map04', {
    center: position,
    zoom: 10
});

var marker = new naver.maps.Marker({
    position: position,
    map: map
});

naver.maps.Event.addListener(map, 'click', function(e) {
    marker.setPosition(e.coord);
});
