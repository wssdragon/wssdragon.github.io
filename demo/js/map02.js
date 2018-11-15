// 이미지 마커 적용

// 경로 초기화 + 맵 초기 위치 지정
var HOME_PATH = window.HOME_PATH || '.';
var position = new naver.maps.LatLng(37.499432, 127.033156);

// 맵 객체
var map = new naver.maps.Map('map02', {
    center: position,
    zoom: 14
});

// 마커 옵션
var markerOptions = {
    // 이미지 마커의 초기 절대위치 값
    position: position.destinationPoint(100, 30),
    map: map,
    // 이미지 마커 정보
    icon: {
        url: '../welcome.png',
        size: new naver.maps.Size(146, 172),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(25, 26)
    }
};

// 마커 객체
var marker = new naver.maps.Marker(markerOptions);
