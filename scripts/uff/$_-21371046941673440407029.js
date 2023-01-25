(function(){{
    var b = a.X();
    b.replace(/\xa0|\s/g, ' ');
    a.ib = {
        1: b + '-disabled',
        2: b + '-hover',
        4: b + '-active',
        8: b + '-selected',
        16: b + '-checked',
        32: b + '-focused',
        64: b + '-open'
    };
}})();