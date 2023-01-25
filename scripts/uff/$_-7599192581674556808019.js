(function(){{
    if (_1e8) {
        if (_1e8.isTransitioning()) {
            setTimeout(lang.hitch(null, _1e6, hash), _1ea);
            return;
        }
        var href = _1e8.iframe.location.href;
        var _1ef = href.indexOf('?');
        _1e8.iframe.location.replace(href.substring(0, _1ef) + '?' + hash);
        return;
    }
    location.replace('#' + hash);
    !_1e9 && _1ee();
}})();