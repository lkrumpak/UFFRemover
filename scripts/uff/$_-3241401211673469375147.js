(function(){{
    var t = e.id, n;
    e.jsonp ? n =     $that.__jsonp : aria.utils.Type.isHTMLElement(e.form) ? n =     $that.__iframe : n =     $that._getTransport(e.url, Aria.$frameworkWindow ? Aria.$frameworkWindow.location : null);
    var r = Aria.getClassRef(n), i = {
            req: e,
            transport: {
                classpath: n,
                instance: r
            }
        };
    r ?     $that._asyncRequest(i) : Aria.load({
        classes: [n],
        oncomplete: {
            fn:             $that._asyncRequest,
            args: i,
            scope:             $that
        }
    });
}})();