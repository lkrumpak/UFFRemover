(function(){{
    // you can not have a _cid property!
    if (prop === '_cid') {
        return;
    }
    newVal = props[prop];
    // If we are merging...
    if (newVal === undefined) {
        if (remove) {
            self.removeAttr(prop);
        }
        return;
    }
    if (self.__convert) {
        newVal = self.__convert(prop, newVal);
    }
    // if we're dealing with models, want to call _set to let converter run
    if (newVal instanceof can.Map) {
        self.__set(prop, newVal, curVal);    // if its an object, let attr merge
    } else if (Map.helpers.canMakeObserve(curVal) && Map.helpers.canMakeObserve(newVal) && curVal.attr) {
        curVal.attr(newVal, remove);    // otherwise just set
    } else if (curVal !== newVal) {
        self.__set(prop, newVal, curVal);
    }
    delete props[prop];
}})();