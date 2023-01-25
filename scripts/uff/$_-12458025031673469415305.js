(function(){{
    if (typeof selector === 'function') {
        listener = selector;
        selector = null;
    }
    if (        $that.el) {
        var handlers =         $that._domEvents.slice();
        for (var i = 0, len = handlers.length; i < len; i++) {
            var item = handlers[i];
            var match = item.eventName === eventName && (listener ? item.listener === listener : true) && (selector ? item.selector === selector : true);
            if (!match)
                continue;
            elementRemoveEventListener.call(            $that.el, item.eventName, item.handler, false);
                        $that._domEvents.splice(indexOf(handlers, item), 1);
        }
    }
    return    $that;
}})();