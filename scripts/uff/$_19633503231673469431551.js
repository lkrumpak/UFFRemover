(function(){{
    return    $that._sources.toArray().map(function (s) {
        return this.sourceRoot ? util.join(this.sourceRoot, s) : s;
    },     $that);
}})();