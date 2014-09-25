L.K.Map.addInitHook(function () {
    this.whenReady(function () {
        var container = L.DomUtil.create('li', 'place-search'),
            photon = new L.Control.Photon({placeholder: 'Search…'});
        container.appendChild(photon.onAdd(this));
        this.toolbar.addTool(container);
    });
});
