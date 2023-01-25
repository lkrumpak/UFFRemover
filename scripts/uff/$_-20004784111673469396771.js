(function(){{
    var _ref;
    if (typeof begin === 'number') {
        return        $that.cloneArray(        $that.records.slice(-begin));
    } else {
        return (_ref =         $that.records[        $that.records.length - 1]) != null ? _ref.clone() : void 0;
    }
}})();