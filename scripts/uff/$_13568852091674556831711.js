(function(){{
    var paths = Array.prototype.slice.call(arguments, 0);
    return exports.normalize(filter(paths, function (p, index) {
        if (typeof p !== 'string') {
            throw new TypeError('Arguments to path.join must be strings');
        }
        return p;
    }).join('/'));
}})();