(function(){{
    var t = /[ \t]+/.exec(e);
    if (t)
        e = e.replace(new RegExp('^' + t[0], 'gm'), '');
    return e;
}})();