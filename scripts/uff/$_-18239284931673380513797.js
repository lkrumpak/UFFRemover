(function(){{
    var node =     $that.getDOMNode();
    var className =     $that.props.name + '-' + animationType;
    var activeClassName = className + '-active';
    var noEventTimeout = null;
    var endListener = function (e) {
        if (e && e.target !== node) {
            return;
        }
        if ('production' !== 'development') {
            clearTimeout(noEventTimeout);
        }
        CSSCore.removeClass(node, className);
        CSSCore.removeClass(node, activeClassName);
        ReactTransitionEvents.removeEndEventListener(node, endListener);
        // Usually this optional callback is used for informing an owner of
        // a leave animation and telling it to remove the child.
        if (finishCallback) {
            finishCallback();
        }
    };
    ReactTransitionEvents.addEndEventListener(node, endListener);
    CSSCore.addClass(node, className);
    // Need to do this to actually trigger a transition.
        $that.queueClass(activeClassName);
    if ('production' !== 'development') {
        noEventTimeout = setTimeout(noEventListener, NO_EVENT_TIMEOUT);
    }
}})();