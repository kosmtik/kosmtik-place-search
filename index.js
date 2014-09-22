var PlaceSearch = function (config) {
    config.addJS('/node_modules/kosmtik-place-search/node_modules/leaflet.photon/leaflet.photon.js');
    config.addCSS('/node_modules/kosmtik-place-search/node_modules/leaflet.photon/leaflet.photon.css');
    config.addJS('/node_modules/kosmtik-place-search/front/place-search.js');
    config.addCSS('/node_modules/kosmtik-place-search/front/place-search.css');
};

exports.Plugin = PlaceSearch;
