(function(){{
    var last = now() - timestamp;
    if (last < wait && last > 0) {
        timeout = setTimeout(later, wait - last);
    } else {
        timeout = null;
        if (!immediate) {
            result = func.apply(context, args);
            if (!timeout)
                context = args = null;
        }
    }
}})();