(function(){{
    if (Device.isCordova()) {
        return Device.exec('ChildBrowser', 'showWebPage', [loc]).error(function () {
            window.location.href = loc;
        });
    } else {
        window.open(loc);
        return new Promise(window).resolve();
    }
}})();