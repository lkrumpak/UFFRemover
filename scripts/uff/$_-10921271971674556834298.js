(function(){{
    if (DOMform && DOMform.nodeName == 'FORM') {
        var that =         $that;
        DOMform.addEventListener('submit', function (event) {
            toArray(DOMform.querySelectorAll('[name]')).forEach(that.set, that);
            event.preventDefault();
        }, true);
        return true;
    } else {
        return false;
    }
}})();