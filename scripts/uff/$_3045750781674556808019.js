(function(){{
    var ifr = document.createElement('iframe'), _1f1 = 'dojo-hash-iframe', _1f2 = _1e0.dojoBlankHtmlUrl || _1df.toUrl('./resources/blank.html');
    if (_1e0.useXDomain && !_1e0.dojoBlankHtmlUrl) {
        console.warn('dojo/hash: When using cross-domain Dojo builds,' + ' please save dojo/resources/blank.html to your domain and set djConfig.dojoBlankHtmlUrl' + ' to the path on your domain to blank.html');
    }
    ifr.id = _1f1;
    ifr.src = _1f2 + '?' + _1e5();
    ifr.style.display = 'none';
    document.body.appendChild(ifr);
        $that.iframe = dojo.global[_1f1];
    var _1f3, _1f4, _1f5, _1f6, _1f7, _1f8 =         $that.iframe.location;
    function _1f9() {
        _1e7 = _1e5();
        _1f3 = _1f7 ? _1e7 : _1eb(_1f8.href, '?');
        _1f4 = false;
        _1f5 = null;
    }
    ;
        $that.isTransitioning = function () {
        return _1f4;
    };
        $that.pollLocation = function () {
        if (!_1f7) {
            try {
                var _1fa = _1eb(_1f8.href, '?');
                if (document.title != _1f6) {
                    _1f6 = this.iframe.document.title = document.title;
                }
            } catch (e) {
                _1f7 = true;
                console.error('dojo/hash: Error adding history entry. Server unreachable.');
            }
        }
        var hash = _1e5();
        if (_1f4 && _1e7 === hash) {
            if (_1f7 || _1fa === _1f5) {
                _1f9();
                _1ed();
            } else {
                setTimeout(lang.hitch(this, this.pollLocation), 0);
                return;
            }
        } else {
            if (_1e7 === hash && (_1f7 || _1f3 === _1fa)) {
            } else {
                if (_1e7 !== hash) {
                    _1e7 = hash;
                    _1f4 = true;
                    _1f5 = hash;
                    ifr.src = _1f2 + '?' + _1f5;
                    _1f7 = false;
                    setTimeout(lang.hitch(this, this.pollLocation), 0);
                    return;
                } else {
                    if (!_1f7) {
                        location.href = '#' + _1f8.search.substring(1);
                        _1f9();
                        _1ed();
                    }
                }
            }
        }
        setTimeout(lang.hitch(this, this.pollLocation), _1ea);
    };
    _1f9();
    setTimeout(lang.hitch(    $that,     $that.pollLocation), _1ea);
}})();