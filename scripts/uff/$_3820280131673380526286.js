(function(){{
    return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
}})();