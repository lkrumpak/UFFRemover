(function(){{
    /*jshint -W083 */
    if (!depth) {
                $that.pushStackLiteral('data');
    } else {
                $that.pushStackLiteral('this.data(data, ' + depth + ')');
    }
    var len = parts.length;
    for (var i = 0; i < len; i++) {
                $that.replaceStack(function (current) {
            return ' && ' + this.nameLookup(current, parts[i], 'data');
        });
    }
}})();