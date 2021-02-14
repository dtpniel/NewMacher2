
import axios from "axios";
var turf = require('@turf/turf');
export default ({ app }, inject) => {
    inject('global', {
        facebookKey: "836797929683024",
        googleKey: "194392922882-jkdlkc4n44036jh97j2foatcaidh68of.apps.googleusercontent.com",
        googleMapsKey: "AIzaSyBrTrorHTE-6cPNubZrc0OWVfmf9-4osaw",


        //global functions
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
    )
}
//google geo filter
//new function
