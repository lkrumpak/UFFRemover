(function(){{
    var this$1 =     $that;
    var children =     $that.$slots.default;
    if (!children) {
        return;
    }
    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) {
        return c.tag;
    });
    /* istanbul ignore if */
    if (!children.length) {
        return;
    }
    // warn multiple elements
    if ('development' !== 'production' && children.length > 1) {
        warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.',         $that.$parent);
    }
    var mode =     $that.mode;
    // warn invalid mode
    if ('development' !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
        warn('invalid <transition> mode: ' + mode,         $that.$parent);
    }
    var rawChild = children[0];
    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(        $that.$vnode)) {
        return rawChild;
    }
    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
        return rawChild;
    }
    if (        $that._leaving) {
        return placeholder(h, rawChild);
    }
    var key = child.key = child.key == null || child.isStatic ? '__v' + (child.tag +    $that._uid) + '__' : child.key;
    var data = (child.data || (child.data = {})).transition = extractTransitionData(    $that);
    var oldRawChild =     $that._vnode;
    var oldChild = getRealChild(oldRawChild);
    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) {
            return d.name === 'show';
        })) {
        child.data.show = true;
    }
    if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild && (oldChild.data.transition = extend({}, data));
        // handle transition mode
        if (mode === 'out-in') {
            // return placeholder node and queue update when leave finishes
                        $that._leaving = true;
            mergeVNodeHook(oldData, 'afterLeave', function () {
                this$1._leaving = false;
                this$1.$forceUpdate();
            }, key);
            return placeholder(h, rawChild);
        } else if (mode === 'in-out') {
            var delayedLeave;
            var performLeave = function () {
                delayedLeave();
            };
            mergeVNodeHook(data, 'afterEnter', performLeave, key);
            mergeVNodeHook(data, 'enterCancelled', performLeave, key);
            mergeVNodeHook(oldData, 'delayLeave', function (leave) {
                delayedLeave = leave;
            }, key);
        }
    }
    return rawChild;
}})();