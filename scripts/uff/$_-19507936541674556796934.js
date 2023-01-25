(function(){{
    var _ref;
    if (end == null) {
        end = 1;
    }
    if (end > 1) {
        return        $that.cloneArray(        $that.records.slice(0, end));
    } else {
        return (_ref =         $that.records[0]) != null ? _ref.clone() : void 0;
    }
}})();