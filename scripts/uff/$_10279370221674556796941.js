(function(){{
    var previous, _ref, _ref1;
    element = element.el || element;
    if (typeof element === 'string') {
        element = $.trim(element);
    }
    _ref1 = [
                $that.el,
        $(((_ref = $.parseHTML(element)) != null ? _ref[0] : void 0) || element)
    ], previous = _ref1[0],     $that.el = _ref1[1];
    previous.replaceWith(    $that.el);
        $that.delegateEvents(    $that.events);
        $that.refreshElements();
    return    $that.el;
}})();