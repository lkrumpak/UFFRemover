(function(){{
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
        return genIf(el);
    } else if (el.staticInFor) {
        var key = '';
        var parent = el.parent;
        while (parent) {
            if (parent.for) {
                key = parent.key;
                break;
            }
            parent = parent.parent;
        }
        if (!key) {
            'development' !== 'production' && warn$2('v-once can only be used inside v-for that is keyed. ');
            return genElement(el);
        }
        return '_o(' + genElement(el) + ',' + onceCount++ + (key ? ',' + key : '') + ')';
    } else {
        return genStatic(el);
    }
}})();