L.K.Map.addInitHook(function () {
    this.whenReady(function () {
        var container = L.DomUtil.create('li', 'place-search'),
            photon = new L.Control.Photon({placeholder: 'Search…'});
        container.appendChild(photon.onAdd(this));
        this.toolbar.addTool(container);
        var callback = function () {
            photon.input.focus();
        };
        this.commands.add({
            keyCode: L.K.Keys.F,
            ctrlKey: true,
            callback: callback,
            name: 'Place: search'
        });
    });
});
