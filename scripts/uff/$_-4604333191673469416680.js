(function(){{
    var t =         $that, propertyNames, changedProperties, computedStyle, current, to, from, transitionEndHandler, i, prop;
    if (typeof style === 'string') {
        to = {};
        to[style] = value;
    } else {
        to = style;
        complete = options;
        options = value;
    }
    if (!options) {
        warn('The "' + t.name + '" transition does not supply an options object to `t.animateStyle()`. This will break in a future version of Ractive. For more info see https://github.com/RactiveJS/Ractive/issues/340');
        options = t;
        complete = t.complete;
    }
    if (!options.duration) {
        t.setStyle(to);
        if (complete) {
            complete();
        }
    }
    propertyNames = Object.keys(to);
    changedProperties = [];
    computedStyle = window.getComputedStyle(t.node);
    from = {};
    i = propertyNames.length;
    while (i--) {
        prop = propertyNames[i];
        current = computedStyle[prefix(prop)];
        if (current === '0px') {
            current = 0;
        }
        if (current != to[prop]) {
            changedProperties[changedProperties.length] = prop;
            t.node.style[prefix(prop)] = current;
        }
    }
    if (!changedProperties.length) {
        if (complete) {
            complete();
        }
        return;
    }
    setTimeout(function () {
        t.node.style[TRANSITION_PROPERTY] = propertyNames.map(prefix).map(hyphenate).join(',');
        t.node.style[TRANSITION_TIMING_FUNCTION] = hyphenate(options.easing || 'linear');
        t.node.style[TRANSITION_DURATION] = options.duration / 1000 + 's';
        transitionEndHandler = function (event) {
            var index;
            index = changedProperties.indexOf(camelCase(unprefix(event.propertyName)));
            if (index !== -1) {
                changedProperties.splice(index, 1);
            }
            if (changedProperties.length) {
                return;
            }
            t.root.fire(t.name + ':end');
            t.node.removeEventListener(TRANSITIONEND, transitionEndHandler, false);
            if (complete) {
                complete();
            }
        };
        t.node.addEventListener(TRANSITIONEND, transitionEndHandler, false);
        setTimeout(function () {
            var i = changedProperties.length;
            while (i--) {
                prop = changedProperties[i];
                t.node.style[prefix(prop)] = to[prop];
            }
        }, 0);
    }, options.delay || 0);
}})();