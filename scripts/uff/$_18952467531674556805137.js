(function(){{
    context =     $that;
    args = arguments;
    timestamp = now();
    var callNow = immediate && !timeout;
    if (!timeout)
        timeout = setTimeout(later, wait);
    if (callNow) {
        result = func.apply(context, args);
        context = args = null;
    }
    return result;
}})();