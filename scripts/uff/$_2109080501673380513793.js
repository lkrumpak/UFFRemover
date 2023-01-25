(function(){{
    if (        $that._fallbackText) {
        return        $that._fallbackText;
    }
    var start;
    var startValue =     $that._startText;
    var startLength = startValue.length;
    var end;
    var endValue =     $that.getText();
    var endLength = endValue.length;
    for (start = 0; start < startLength; start++) {
        if (startValue[start] !== endValue[start]) {
            break;
        }
    }
    var minEnd = startLength - start;
    for (end = 1; end <= minEnd; end++) {
        if (startValue[startLength - end] !== endValue[endLength - end]) {
            break;
        }
    }
    var sliceTail = end > 1 ? 1 - end : undefined;
        $that._fallbackText = endValue.slice(start, sliceTail);
    return    $that._fallbackText;
}})();