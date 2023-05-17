class GeoCoder {
    getLatLng(address) {
        if (address === "Fairfield") {
            //takes 5 minutes
            return "41.006630 Latitude, -91.965050 Longitude";
        } else if (address === "London") {
            return "51.5171° N, 0.1062° W";
        } else {
            return ""
        }
    }
}

class GeoCoderProxy {

    constructor(){
        this.geoCoder = new GeoCoder();
        this.geoCoderCache = new Map();
    }

    getLatLng(address) {
        if(!this.geoCoderCache.get(address)) {
            this.geoCoderCache.set(address, this.geoCoder.getLatLng(address));
        }
        return this.geoCoderCache.get(address);
    }
}


const geo = new GeoCoderProxy();
geo.getLatLng('Fairfield');
geo.getLatLng('Fairfield');
geo.getLatLng('Fairfield');
geo.getLatLng('Fairfield');