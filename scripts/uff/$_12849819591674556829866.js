(function(){{
    var returnValue;
    var onChange = LinkedValueUtils.getOnChange(    $that);
    if (onChange) {
        returnValue = onChange.call(        $that, event);
    }
    ReactUpdates.asap(forceUpdateIfMounted,     $that);
    return returnValue;
}})();