L.K.Map.addInitHook(function () {
    this.whenReady(function () {
        var container = L.DomUtil.create('div', 'export-container'),
            title = L.DomUtil.create('h3', '', container),
            photon = new L.Control.Photon();
        title.innerHTML = 'Search for places';
        container.appendChild(photon.onAdd(this));
        photon.on('selected', function (e) {
            this.sidebar.close();
        }, this);
        this.sidebar.addTab({
            label: 'Search',
            content: container
        });
        this.sidebar.rebuild();
    });
});
