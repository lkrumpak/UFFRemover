(function(){{
    var scopedSlotFn =     $that.$scopedSlots[name];
    if (scopedSlotFn) {
        // scoped slot
        props = props || {};
        if (bindObject) {
            extend(props, bindObject);
        }
        return scopedSlotFn(props) || fallback;
    } else {
        var slotNodes =         $that.$slots[name];
        // warn duplicate slot usage
        if (slotNodes && 'development' !== 'production') {
            slotNodes._rendered && warn('Duplicate presence of slot "' + name + '" found in the same render tree ' + '- this will likely cause render errors.',             $that);
            slotNodes._rendered = true;
        }
        return slotNodes || fallback;
    }
}})();