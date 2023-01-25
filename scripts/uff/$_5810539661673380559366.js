(function(){{
    return aSources.map(function (source) {
        if (!this._sourcesContents) {
            return null;
        }
        if (aSourceRoot) {
            source = util.relative(aSourceRoot, source);
        }
        var key = util.toSetString(source);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
    },     $that);
}})();