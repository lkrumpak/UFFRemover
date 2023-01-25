(function(){{
    if (typeof context.getElementsByTagName !== 'undefined') {
        return context.getElementsByTagName(tag);    // DocumentFragment nodes don't have gEBTN
    } else if (support.qsa) {
        return context.querySelectorAll(tag);
    }
}})();