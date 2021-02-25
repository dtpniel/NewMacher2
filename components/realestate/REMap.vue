<template>
	<div class="full-page-map-container">
		
		<!-- Enable Filters Button -->
		<div class="filter-button-container">
			<button class="enable-filters-button">
				<i class="enable-filters-button-icon"></i>
				<span class="show-text">Show Filters</span>
				<span class="hide-text">Hide Filters</span>
			</button>
			<div class="filter-button-tooltip">Click to expand sidebar with filters!</div>
		</div>
		
		<!-- Map -->
	    <div id="map" data-map-zoom="12" data-map-scroll="true"></div>
	</div>
  
</template>

<script>
export default {
  methods: {
    mainMap: function () {
      // Locations
      // ----------------------------------------------- //
      var ib = new InfoBox();

      // Infobox Output
      function locationData(
        jobURL,
        companyLogo,
        companyName,
        jobTitle,
        verifiedBadge
      ) {
        return (
          "" +
          '<a href="' +
          jobURL +
          '" class="job-listing">' +
          '<div class="infoBox-close"><i class="icon-feather-x"></i></div>' +
          '<div class="job-listing-details">' +
          '<div class="job-listing-company-logo">' +
          '<div class="' +
          verifiedBadge +
          '-badge"></div>' +
          '<img src="' +
          companyLogo +
          '" alt="">' +
          "</div>" +
          '<div class="job-listing-description">' +
          '<h4 class="job-listing-company">' +
          companyName +
          "</h4>" +
          '<h3 class="job-listing-title">' +
          jobTitle +
          "</h3>" +
          "</div>" +
          "</div>" +
          "</a>"
        );
      }

      // Locations
      var locations = [
        [
          locationData(
            "single-job-page.html",
            "images/company-logo-01.png",
            "Hexagon",
            "Bilingual Event Support Specialist",
            "verified"
          ),
          37.788181,
          -122.46127,
          5,
          "",
        ],
        [
          locationData(
            "single-job-page.html",
            "images/company-logo-05.png",
            "Laxo",
            "Competition Law Officer",
            "not-verified"
          ),
          37.750812,
          -122.471934,
          2,
          "",
        ],
        [
          locationData(
            "single-job-page.html",
            "images/company-logo-02.png",
            "Coffee",
            "Barista and Cashier",
            "not-verified"
          ),
          37.735609,
          -122.458201,
          3,
          "",
        ],
        [
          locationData(
            "single-job-page.html",
            "images/company-logo-03.png",
            "King",
            "Restaurant General Manager",
            "verified"
          ),
          37.745382,
          -122.500773,
          4,
          "",
        ],
        [
          locationData(
            "single-job-page.html",
            "images/company-logo-05.png",
            "Skyist",
            "International Marketing Coordinator",
            "not-verified"
          ),
          37.762963,
          -122.388506,
          1,
          "",
        ],
        [
          locationData(
            "single-job-page.html",
            "images/company-logo-05.png",
            "Podous",
            "Construction Labourers",
            "not-verified"
          ),
          37.801745,
          -122.409085,
          6,
          "",
        ],
        [
          locationData(
            "single-job-page.html",
            "images/company-logo-04.png",
            "Mates",
            "Administrative Assistant",
            "not-verified"
          ),
          37.730511,
          -122.383679,
          7,
          "",
        ],
        [
          locationData(
            "single-job-page.html",
            "images/company-logo-06.png",
            "Trideo",
            "Human Resources Consultant",
            "not-verified"
          ),
          37.750457,
          -122.478779,
          8,
          "",
        ],
        [
          locationData(
            "single-job-page.html",
            "images/company-logo-06.png",
            "Trideo",
            "International Marketing Specialist",
            "not-verified"
          ),
          37.73281,
          -122.415951,
          9,
          "",
        ],
        [
          locationData(
            "single-job-page.html",
            "images/company-logo-02.png",
            "Coffee",
            "Terrain Cafe Barista",
            "not-verified"
          ),
          37.733625,
          -122.378872,
          10,
          "",
        ],
        [
          locationData(
            "#",
            "images/company-logo-05.png",
            "Kinte",
            "Skilled Labourer",
            "not-verified"
          ),
          37.723578,
          -122.457493,
          11,
          "",
        ],
        [
          locationData(
            "single-job-page.html",
            "images/company-logo-05.png",
            "Alilia",
            "Healthcare Claims Advisor",
            "not-verified"
          ),
          37.751543,
          -122.418354,
          12,
          "",
        ],
      ];

      // Map Attributes
      // ----------------------------------------------- //

      var mapZoomAttr = $("#map").attr("data-map-zoom");
      var mapScrollAttr = $("#map").attr("data-map-scroll");

      if (typeof mapZoomAttr !== typeof undefined && mapZoomAttr !== false) {
        var zoomLevel = parseInt(mapZoomAttr);
      } else {
        var zoomLevel = 5;
      }

      if (
        typeof mapScrollAttr !== typeof undefined &&
        mapScrollAttr !== false
      ) {
        var scrollEnabled = parseInt(mapScrollAttr);
      } else {
        var scrollEnabled = false;
      }

      // Main Map
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: zoomLevel,
        scrollwheel: scrollEnabled,
        center: new google.maps.LatLng(37.754929, -122.429416),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        panControl: false,
        navigationControl: false,
        streetViewControl: false,
        gestureHandling: "cooperative",

        // Google Map Style
        styles: [
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#747474" }, { lightness: "23" }],
          },
          {
            featureType: "poi.attraction",
            elementType: "geometry.fill",
            stylers: [{ color: "#f38eb0" }],
          },
          {
            featureType: "poi.government",
            elementType: "geometry.fill",
            stylers: [{ color: "#ced7db" }],
          },
          {
            featureType: "poi.medical",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffa5a8" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#c7e5c8" }],
          },
          {
            featureType: "poi.place_of_worship",
            elementType: "geometry.fill",
            stylers: [{ color: "#d6cbc7" }],
          },
          {
            featureType: "poi.school",
            elementType: "geometry.fill",
            stylers: [{ color: "#c4c9e8" }],
          },
          {
            featureType: "poi.sports_complex",
            elementType: "geometry.fill",
            stylers: [{ color: "#b1eaf1" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ lightness: "100" }],
          },
          {
            featureType: "road",
            elementType: "labels",
            stylers: [{ visibility: "off" }, { lightness: "100" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffd4a5" }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffe9d2" }],
          },
          {
            featureType: "road.local",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
          },
          {
            featureType: "road.local",
            elementType: "geometry.fill",
            stylers: [{ weight: "3.00" }],
          },
          {
            featureType: "road.local",
            elementType: "geometry.stroke",
            stylers: [{ weight: "0.30" }],
          },
          {
            featureType: "road.local",
            elementType: "labels.text",
            stylers: [{ visibility: "on" }],
          },
          {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [{ color: "#747474" }, { lightness: "36" }],
          },
          {
            featureType: "road.local",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#e9e5dc" }, { lightness: "30" }],
          },
          {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [{ visibility: "on" }, { lightness: "100" }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#d2e7f7" }],
          },
        ],
      });

      // Infobox
      // ----------------------------------------------- //

      var boxText = document.createElement("div");
      boxText.className = "map-box";

      var currentInfobox;

      var boxOptions = {
        content: boxText,
        disableAutoPan: false,
        alignBottom: true,
        maxWidth: 0,
        pixelOffset: new google.maps.Size(-160, 0),
        zIndex: null,
        boxStyle: {
          width: "320px",
        },
        closeBoxMargin: "0",
        closeBoxURL: "",
        infoBoxClearance: new google.maps.Size(25, 25),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
      };

      var markerCluster, overlay, i;
      var allMarkers = [];

      var clusterStyles = [
        {
          textColor: "white",
          url: "",
          height: 50,
          width: 50,
        },
      ];

      var markerIco;
      for (i = 0; i < locations.length; i++) {
        markerIco = locations[i][4];

        var overlaypositions = new google.maps.LatLng(
            locations[i][1],
            locations[i][2]
          ),
          overlay = new this.CustomMarker(
            overlaypositions,
            map,
            {
              marker_id: i,
            },
            markerIco
          );

        allMarkers.push(overlay);

        google.maps.event.addDomListener(
          overlay,
          "click",
          (function (overlay, i) {
            return function () {
              ib.setOptions(boxOptions);
              boxText.innerHTML = locations[i][0];
              ib.close();
              ib.open(map, overlay);
              currentInfobox = locations[i][3];

              google.maps.event.addListener(ib, "domready", function () {
                $(".infoBox-close").click(function (e) {
                  e.preventDefault();
                  ib.close();
                  $(".map-marker-container").removeClass(
                    "clicked infoBox-opened"
                  );
                });
              });
            };
          })(overlay, i)
        );
      }

      // Marker Clusterer Init
      // ----------------------------------------------- //

      var options = {
        imagePath: "images/",
        styles: clusterStyles,
        minClusterSize: 3,
      };

      markerCluster = new MarkerClusterer(map, allMarkers, options);

      google.maps.event.addDomListener(window, "resize", function () {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
      });

      // Custom User Interface Elements
      // ----------------------------------------------- //

      // Custom Zoom-In and Zoom-Out Buttons
      var zoomControlDiv = document.createElement("div");
      var zoomControl = new ZoomControl(zoomControlDiv, map);

      function ZoomControl(controlDiv, map) {
        zoomControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(
          zoomControlDiv
        );
        // Creating divs & styles for custom zoom control
        controlDiv.style.padding = "5px";
        controlDiv.className = "zoomControlWrapper";

        // Set CSS for the control wrapper
        var controlWrapper = document.createElement("div");
        controlDiv.appendChild(controlWrapper);

        // Set CSS for the zoomIn
        var zoomInButton = document.createElement("div");
        zoomInButton.className = "custom-zoom-in";
        controlWrapper.appendChild(zoomInButton);

        // Set CSS for the zoomOut
        var zoomOutButton = document.createElement("div");
        zoomOutButton.className = "custom-zoom-out";
        controlWrapper.appendChild(zoomOutButton);

        // Setup the click event listener - zoomIn
        google.maps.event.addDomListener(zoomInButton, "click", function () {
          map.setZoom(map.getZoom() + 1);
        });

        // Setup the click event listener - zoomOut
        google.maps.event.addDomListener(zoomOutButton, "click", function () {
          map.setZoom(map.getZoom() - 1);
        });
      }

      // Geo Location Button
      $("#geoLocation, .input-with-icon.location a").click(function (e) {
        e.preventDefault();
        geolocate();
      });

      function geolocate() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            var pos = new google.maps.LatLng(
              position.coords.latitude,
              position.coords.longitude
            );
            map.setCenter(pos);
            map.setZoom(12);
          });
        }
      }
    },
    // Custom Map Marker
    // ----------------------------------------------- //

    CustomMarker: function (latlng, map, args, markerIco) {
      this.latlng = latlng;
      this.args = args;
      this.markerIco = markerIco;
      this.setMap(map);
    },

    // -------------- Custom Map Marker / End -------------- //
  },
  mounted() {
    if (process.browser) {
      // initialCustom();

      // Main Map
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        scrollwheel: 1,
        center: new google.maps.LatLng(37.754929, -122.429416),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        panControl: false,
        navigationControl: false,
        streetViewControl: false,
        gestureHandling: "cooperative",

        // Google Map Style
        styles: [
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#747474" }, { lightness: "23" }],
          },
          {
            featureType: "poi.attraction",
            elementType: "geometry.fill",
            stylers: [{ color: "#f38eb0" }],
          },
          {
            featureType: "poi.government",
            elementType: "geometry.fill",
            stylers: [{ color: "#ced7db" }],
          },
          {
            featureType: "poi.medical",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffa5a8" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#c7e5c8" }],
          },
          {
            featureType: "poi.place_of_worship",
            elementType: "geometry.fill",
            stylers: [{ color: "#d6cbc7" }],
          },
          {
            featureType: "poi.school",
            elementType: "geometry.fill",
            stylers: [{ color: "#c4c9e8" }],
          },
          {
            featureType: "poi.sports_complex",
            elementType: "geometry.fill",
            stylers: [{ color: "#b1eaf1" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ lightness: "100" }],
          },
          {
            featureType: "road",
            elementType: "labels",
            stylers: [{ visibility: "off" }, { lightness: "100" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffd4a5" }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffe9d2" }],
          },
          {
            featureType: "road.local",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
          },
          {
            featureType: "road.local",
            elementType: "geometry.fill",
            stylers: [{ weight: "3.00" }],
          },
          {
            featureType: "road.local",
            elementType: "geometry.stroke",
            stylers: [{ weight: "0.30" }],
          },
          {
            featureType: "road.local",
            elementType: "labels.text",
            stylers: [{ visibility: "on" }],
          },
          {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [{ color: "#747474" }, { lightness: "36" }],
          },
          {
            featureType: "road.local",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#e9e5dc" }, { lightness: "30" }],
          },
          {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [{ visibility: "on" }, { lightness: "100" }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#d2e7f7" }],
          },
        ],
      });

      // Map Init
      var map = document.getElementById("map");
      if (typeof map != "undefined" && map != null) {
        google.maps.event.addDomListener(window, "load", this.mainMap);
      }

      this.CustomMarker.prototype = new google.maps.OverlayView();

      this.CustomMarker.prototype.draw = function () {
        var self = this;

        var div = this.div;

        if (!div) {
          div = this.div = document.createElement("div");
          div.className = "map-marker-container";

          div.innerHTML =
            '<div class="marker-container">' +
            '<div class="marker-card">' +
            "</div>" +
            "</div>";

          // Clicked marker highlight
          google.maps.event.addDomListener(div, "click", function (event) {
            $(".map-marker-container").removeClass("clicked infoBox-opened");
            google.maps.event.trigger(self, "click");
            $(this).addClass("clicked infoBox-opened");
          });

          if (typeof self.args.marker_id !== "undefined") {
            div.dataset.marker_id = self.args.marker_id;
          }

          var panes = this.getPanes();
          panes.overlayImage.appendChild(div);
        }

        var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

        if (point) {
          div.style.left = point.x + "px";
          div.style.top = point.y + "px";
        }
      };

      this.CustomMarker.prototype.remove = function () {
        if (this.div) {
          this.div.parentNode.removeChild(this.div);
          this.div = null;
          $(this).removeClass("clicked");
        }
      };

      this.CustomMarker.prototype.getPosition = function () {
        return this.latlng;
      };
    }
  },
};
</script>
