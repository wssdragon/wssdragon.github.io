var HOME_PATH = window.HOME_PATH || '.';

// 맵 지정
var map = new naver.maps.Map(document.getElementById('map03'), {
    zoom: 11,
    center: new naver.maps.LatLng(37.3614483, 129.1114883)
});

// 아이콘 위치 지정
var latlngs = [
    new naver.maps.LatLng(37.3633324, 129.1054988),
    new naver.maps.LatLng(37.3632916, 129.1085015),
    new naver.maps.LatLng(37.3632507, 129.1115043),
    new naver.maps.LatLng(37.3632097, 129.114507),
    new naver.maps.LatLng(37.3631687, 129.1175097),
    new naver.maps.LatLng(37.3597282, 129.105422),
    new naver.maps.LatLng(37.3596874, 129.1084246),
    new naver.maps.LatLng(37.3596465, 129.1114272),
    new naver.maps.LatLng(37.3596056, 129.1144298),
    new naver.maps.LatLng(37.3595646, 129.1174323)
];

// 마커 리스트 객체 선언
var markerList = [];

// 마커 객체 생성
for (var i=0, ii=latlngs.length; i<ii; i++) {
    var icon = {
            url: 'https://navermaps.github.io/maps.js.ncp/img/example/sp_pins_spot_v3.png',
            size: new naver.maps.Size(24, 37),
            anchor: new naver.maps.Point(12, 37),
            origin: new naver.maps.Point(i * 29, 0)
        },
        marker = new naver.maps.Marker({
            position: latlngs[i],
            map: map,
            icon: icon
        });

    marker.set('seq', i);

    markerList.push(marker);

    // 마커에 이벤트 리스너 추가
    marker.addListener('mouseover', onMouseOver);
    marker.addListener('mouseout', onMouseOut);

    icon = null;
    marker = null;
}

// 온마우스 오버/아웃 액션 시 마커 설정
function onMouseOver(e) {
    var marker = e.overlay,
        seq = marker.get('seq');

    marker.setIcon({
        url: 'https://navermaps.github.io/maps.js.ncp/img/example/sp_pins_spot_v3_over.png',
        size: new naver.maps.Size(24, 37),
        anchor: new naver.maps.Point(12, 37),
        origin: new naver.maps.Point(seq * 29, 50)
    });
}

function onMouseOut(e) {
    var marker = e.overlay,
        seq = marker.get('seq');

    marker.setIcon({
        url: 'https://navermaps.github.io/maps.js.ncp/img/example/sp_pins_spot_v3.png',
        size: new naver.maps.Size(24, 37),
        anchor: new naver.maps.Point(12, 37),
        origin: new naver.maps.Point(seq * 29, 0)
    });
}
