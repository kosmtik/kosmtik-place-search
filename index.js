class PlaceSearch {
    constructor(config) {
        config.addJS('/node_modules/leaflet.photon/leaflet.photon.js');
        config.addCSS('/node_modules/leaflet.photon/leaflet.photon.css');
        config.addJS('/node_modules/kosmtik-place-search/front/place-search.js');
        config.addCSS('/node_modules/kosmtik-place-search/front/place-search.css');
    }
}

exports = module.exports = { Plugin: PlaceSearch }
