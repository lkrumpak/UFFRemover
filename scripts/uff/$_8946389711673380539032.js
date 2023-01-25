(function(){{
    var url =     $that.explode();
    if (typeof i === 'number' && typeof v === 'string') {
        url[i] = v;
    } else if (typeof val === 'string') {
        url.splice(i, v, s);
    } else {
        url = [i];
    }
    listener.setHash(url.join('/'));
    return url;
}})();