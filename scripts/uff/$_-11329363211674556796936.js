(function(){{
    var key, value;
    if (atts.id) {
                $that.id = atts.id;
    }
    for (key in atts) {
        value = atts[key];
        if (typeof            $that[key] === 'function') {
            if (typeof value === 'function') {
                continue;
            }
                        $that[key](value);
        } else {
                        $that[key] = value;
        }
    }
    return    $that;
}})();