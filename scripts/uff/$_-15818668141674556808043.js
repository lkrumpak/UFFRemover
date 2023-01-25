(function(){{
    if (hp) {
        hp.unwatch();
    }
    if (_6ba && lang.isFunction(_6ba.set) && lang.isFunction(_6ba.watch)) {
        hp = _6ba.watch.apply(_6ba, (name ? [name] : []).concat([function (name, old, _6bb) {
                _6b7.call(_6b8, name, old, _6bb);
            }]));
    }
}})();