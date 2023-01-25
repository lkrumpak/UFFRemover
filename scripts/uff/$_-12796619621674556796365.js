(function(){{
    LocationInfo.call(    $that, locInfo);
        $that.type = 'ID';
    var original = '', dig = [], depth = 0;
    for (var i = 0, l = parts.length; i < l; i++) {
        var part = parts[i].part;
        original += (parts[i].separator || '') + part;
        if (part === '..' || part === '.' || part === 'this') {
            if (dig.length > 0) {
                throw new Exception('Invalid path: ' + original,                 $that);
            } else if (part === '..') {
                depth++;
            } else {
                                $that.isScoped = true;
            }
        } else {
            dig.push(part);
        }
    }
        $that.original = original;
        $that.parts = dig;
        $that.string = dig.join('.');
        $that.depth = depth;
    // an ID is simple if it only has one part, and that part is not
    // `..` or `this`.
        $that.isSimple = parts.length === 1 && !    $that.isScoped && depth === 0;
        $that.stringModeValue =     $that.string;
}})();