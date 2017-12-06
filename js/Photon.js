



        //Carousel
        $(document).ready(function () {
            $('.carousel').carousel();
        });
        
        
        
        
        
        
        //ScrollSpy Barra Vertical
        $(document).ready(function () {
            $('.scrollspy').scrollSpy();
        });


        //Google Maps
        
        function initMap() {
          var uluru = {lat: -23.5366, lng: -46.6463};
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: uluru
          });
          var marker = new google.maps.Marker({
            position: uluru,
            map: map
          });
        }
    
  