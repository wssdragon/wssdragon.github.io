// 기본 마커 정의

// 맵 옵션 정의
var mapOptions = {
    center: new naver.maps.LatLng(37.499432, 127.033156),
    zoom: 10
};

// 맵 객체
var map = new naver.maps.Map('map01', mapOptions);

// 마커 객체
var marker = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.499432, 127.033156),
  map: map
});
