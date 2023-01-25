(function(){{
    var tag =     $that.tag ||    $that.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren =     $that.prevChildren =     $that.children;
    var rawChildren =     $that.$slots.default || [];
    var children =     $that.children = [];
    var transitionData = extractTransitionData(    $that);
    for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
            if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
                children.push(c);
                map[c.key] = c;
                (c.data || (c.data = {})).transition = transitionData;
            } else {
                var opts = c.componentOptions;
                var name = opts ? opts.Ctor.options.name || opts.tag : c.tag;
                warn('<transition-group> children must be keyed: <' + name + '>');
            }
        }
    }
    if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
            var c$1 = prevChildren[i$1];
            c$1.data.transition = transitionData;
            c$1.data.pos = c$1.elm.getBoundingClientRect();
            if (map[c$1.key]) {
                kept.push(c$1);
            } else {
                removed.push(c$1);
            }
        }
                $that.kept = h(tag, null, kept);
                $that.removed = removed;
    }
    return h(tag, null, children);
}})();