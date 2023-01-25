(function(){{
    var proxy =     $that.proxyMap[proxyName];
    if (proxy) {
                $that.proxyMap[proxyName] = null;
        proxy.onRemove();
    }
    return proxy;
}})();