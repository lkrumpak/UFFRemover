(function(){{
    var transition, node, oldTransition;
    if (!root.transitionsEnabled || root._parent && !root._parent.transitionsEnabled) {
        return;
    }
    transition = new Transition(descriptor, root, owner, contextStack, isIntro);
    if (transition._fn) {
        node = transition.node;
        transition._manager = root._transitionManager;
        if (oldTransition = node._ractive.transition) {
            oldTransition.complete();
        }
        node._ractive.transition = transition;
        transition._manager.push(node);
        if (isIntro) {
            root._deferred.transitions.push(transition);
        } else {
            transition.init();
        }
    }
}})();