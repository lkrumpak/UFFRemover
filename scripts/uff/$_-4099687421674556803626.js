(function(){{
    var next =     $that.match;
    if (next.length < 20) {
        next +=         $that._input.substr(0, 20 - next.length);
    }
    return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, '');
}})();