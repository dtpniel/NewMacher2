import Vue from 'vue';

import axios from "axios";
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

    isPointInPolygon(lng, lat, polygon) {
      var turf = require('@turf/turf');
      if (!lng)
        return false;

      var centerPoint = turf.point([lng, lat]);
      var poly = turf.polygon([polygon]);
      var isPointinPolygon = turf.booleanPointInPolygon(centerPoint, poly);
      return isPointinPolygon;
    },

    async getLocationPolygon(address, radius) {
      let apiPath = "https://nominatim.openstreetmap.org/search.php";
      let params = {
        q: address,
        polygon_geojson: 1,
        format: "json",
      };

      var response = await axios.get(apiPath, { params: params });
      if (!response.data)
        return [];
      let cityPolygon = response.data[0].geojson.coordinates[0];
      if (radius > 0) {
        cityPolygon = turf.buffer(poly, radius, { units: "miles" });
        if (cityPolygon.data)
          cityPolygon = cityPolygon.data[0].geojson.coordinates[0];
      }

      var str = "";
      console.log("city polygon:");
      for (var i = 0; i < cityPolygon.length; i++)
        str +=
          cityPolygon[i][0] +
          "," +
          cityPolygon[i][1] +
          "\n";
      console.log(str);
      return cityPolygon;
    }
  }
});

