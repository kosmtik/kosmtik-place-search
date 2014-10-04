L.K.Map.addInitHook(function () {
    this.whenReady(function () {
        var container = L.DomUtil.create('li', 'place-search'),
            photon = new L.Control.Photon({placeholder: 'Search…'});
        container.appendChild(photon.onAdd(this));
        this.toolbar.addTool(container);
        var shortcutCallback = function () {
            photon.input.focus();
        };
        this.shortcuts.add({
            keyCode: L.K.Keys.F,
            ctrlKey: true,
            callback: shortcutCallback,
            description: 'Search for places'
        });
    });
});
