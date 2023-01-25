(function(){{
    // We need to provide this childFactory so that
    // ReactCSSTransitionGroupChild can receive updates to name, enter, and
    // leave while it is leaving.
    return ReactCSSTransitionGroupChild({
        name:         $that.props.transitionName,
        appear:         $that.props.transitionAppear,
        enter:         $that.props.transitionEnter,
        leave:         $that.props.transitionLeave
    }, child);
}})();