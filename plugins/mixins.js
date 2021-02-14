import Vue from 'vue';

import axios from "axios";
var turf = require('@turf/turf');
Vue.mixin({
  methods: {
    // isMobile() {
    //   // if (process.browser) {
    //   //   var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    //   //   if (width < 990)
    //   //     return true;
    //   //   else
    //   //     return false;
    //   // }
    //   var MobileDetect = require('mobile-detect'),
    //     md = new MobileDetect(req.headers['user-agent']);
    //   console.log(md);

    //   return false;

    // },
    isHomePage() {
      if (this.$router.currentRoute.path.toString() == '/')
        return true;
      else
        return false;
    },
    createMetaTags(metaTags) {
      var metaTags =
        [
          {
            hid: "description",
            name: "description",
            content: metaTags.description
          },
          {
            vmid: "og:title",
            property: "og:title",
            content: metaTags.socialTitle
          },
          {
            vmid: "og:description",
            property: "og:description",
            content: metaTags.socialDescription
          },
          {
            vmid: "og:url",
            property: "og:url",
            content: metaTags.canonical
          },
          ,
          {
            vmid: "og:site_name",
            property: "og:site_name",
            content: metaTags.siteName
          },
          {
            vmid: "twitter:card",
            name: "twitter:card",
            content: metaTags.title
          },
          {
            vmid: "twitter:site",
            name: "twitter:site",
            content: metaTags.twitter
          },
          {
            vmid: "twitter:creator",
            name: "twitter:creator",
            content: metaTags.twitter
          },
          { itemprop: 'name', content: metaTags.title },
          { itemprop: 'description', content: metaTags.description }
        ];
      return metaTags;
    },

    isPointInPolygon(lng, lat, polygons) {
      //var turf = require('@turf/turf');
      var isPointinPolygon;
      if (!lng)
        return false;
      var centerPoint = turf.point([lng, lat]);

      // var poly = polygons.length == 1 ? turf.polygon(polygons) : turf.multiPolygon(polygons);

      for (var i = 0; i < polygons.length; i++) {
        try {
          var poly = polygons[i].length == 1 ? turf.multiPolygon([polygons[i]]) : turf.polygon([polygons[i]])
          isPointinPolygon = turf.booleanPointInPolygon(centerPoint, poly, { ignoreBoundary: true });
          if (isPointinPolygon)
            return isPointinPolygon;
        }
        catch (ex) {
          console.log(ex);
        }
      };

      return isPointinPolygon;
    },

    async getLocationPolygon(address, radius) {
      //  var turf = require('@turf/turf');
      let apiPath = "https://nominatim.openstreetmap.org/search.php";
      let params = {
        q: address,
        polygon_geojson: 1,
        format: "json",
      };

      var response = await axios.get(apiPath, { params: params });
      if (!response.data || response.data.length == 0)
        return [];
      let cityPolygons = response.data[0].geojson.coordinates;
      if (radius > 0) {
        cityPolygons.forEach((element, index) => {
          var poly = element.length == 1 ? turf.multiPolygon([element]) : turf.polygon([element])
          var bufferredPolygon = turf.buffer(poly, radius, { units: "miles" });
          if (bufferredPolygon.geometry)
            cityPolygons[index] = bufferredPolygon.geometry.coordinates[0];
        });

      }

      // var str = "";
      // console.log("city polygon:");
      // for (var i = 0; i < cityPolygons[2].length; i++)
      //   str +=
      //     cityPolygons[0][i][0] +
      //     "," +
      //     cityPolygons[0][i][1] +
      //     "\n";
      // console.log(str);
      return cityPolygons;
    }
  }
});

