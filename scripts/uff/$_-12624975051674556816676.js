(function(){{
    var last20, next20;
    last20 =     $that.str.substr(0,     $that.pos).substr(-20);
    if (last20.length === 20) {
        last20 = '...' + last20;
    }
    next20 =     $that.remaining().substr(0, 20);
    if (next20.length === 20) {
        next20 = next20 + '...';
    }
    throw new Error('Could not parse template: ' + (last20 ? last20 + '<- ' : '') + 'failed at character ' +    $that.pos + ' ->' + next20);
}})();