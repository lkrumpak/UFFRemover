(function(){{
    obj.bind(ev, callback);
        $that.listeningTo || (    $that.listeningTo = []);
        $that.listeningTo.push({
        obj: obj,
        ev: ev,
        callback: callback
    });
    return    $that;
}})();