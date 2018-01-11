 navigator.geolocation.getCurrentPosition(updatePosition);

        function updatePosition(pos) {
            // задание координат.
            var position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);


            // параметры для карты.
            var options = {
                zoom: 14,
                center: position, // позиция на карте
                mapTypeId: google.maps.MapTypeId.ROADMAP // тип карты - ROADMAP, SATELLITE, HYBRID and TERRAIN
            };

            // объект карты.
            var map = new google.maps.Map(document.getElementById("map"), options);

            // маркер на карте
            var marker = new google.maps.Marker({
                position: position,
                map: map,
                title: "Это Вы!"
            });

            // объект всплывающей подсказки.
            var infowindow = new google.maps.InfoWindow({
                content: "Скорее всего, это Ваше текущее положение"
            });

            // присвоение обработчика на нажатие по маркеру.
            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
        }