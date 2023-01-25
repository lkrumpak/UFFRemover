(function(){{
    e = e || event;
    var currentTarget = e.currentTarget ||    $that;
    withAttrCallback(prop in currentTarget ? currentTarget[prop] : currentTarget.getAttribute(prop));
}})();