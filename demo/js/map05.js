var HOME_PATH = window.HOME_PATH || '.';
var map = new naver.maps.Map(document.getElementById('map05'), {zoom: 11});

map.fitBounds(naver.maps.LatLngBounds.bounds(new naver.maps.LatLng(37.3724620, 127.1051714),
                                             new naver.maps.LatLng(37.3542795, 127.1174332)));
// 마커에 애니메이션 추가
var urlMarker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.3542795, 127.1072556),
    map: map,
    title: 'urlMarker',
    icon: "https://navermaps.github.io/maps.js.ncp/img/example/pin_default.png",
    animation: naver.maps.Animation.DROP
});

// 마커에 이벤트 리스너 추가
naver.maps.Event.addListener(urlMarker, 'click', function() {
    if (urlMarker.getAnimation() !== null) {
        urlMarker.setAnimation(null);
    } else {
      // 클릭 시 BOUNCE 애니메이션을 set
        urlMarker.setAnimation(naver.maps.Animation.BOUNCE);
    }
});

// 이미지 마커
var imageMarker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.3637770, 127.1174332),
    map: map,
    title: 'imageMarker',
    icon: "https://navermaps.github.io/maps.js.ncp/img/example/pin_default.png",
    animation: naver.maps.Animation.BOUNCE
});

// 심볼 마커
var symbolMarker = new naver.maps.Marker({
    map: map,
    position: new naver.maps.LatLng(37.3692417, 127.1134740),
    title: 'symbolMarker',
    icon: {
        path: [
            new naver.maps.Point(0, 70), new naver.maps.Point(20, 100), new naver.maps.Point(40, 70),
            new naver.maps.Point(30, 70), new naver.maps.Point(70, 0), new naver.maps.Point(10, 70)
        ],
        style: "closedPath",
        anchor: new naver.maps.Point(23, 103),
        fillColor: '#ff0000',
        fillOpacity: 1,
        strokeColor: '#000000',
        strokeStyle: 'solid',
        strokeWeight: 3
    },
    shape: {
        coords: [0, 70, 20, 100, 40, 70, 30, 70, 70, 0, 10, 70],
        type: "poly"
    },
    animation: naver.maps.Animation.BOUNCE
});

// 관련 CSS 정보가 없어서 출력 X
var htmlMarker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.3578575, 127.1063746),
    map: map,
    title: 'htmlMarker',
    icon: {
        content: [
            '<div class="cs_mapbridge">',
            '<div class="map_group _map_group">',
            '<div class="map_marker _marker tvhp tvhp_big">',
            '<span class="ico _icon"></span>',
            '<span class="shd"></span>',
            '</div>',
            '</div>',
            '</div>'
        ].join(''),
        size: new naver.maps.Size(38, 58),
        anchor: new naver.maps.Point(19, 58)
    },
    animation: naver.maps.Animation.BOUNCE
});
