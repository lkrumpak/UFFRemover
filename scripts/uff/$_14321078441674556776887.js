(function(){{
    var classes, elem, cur, clazz, j, finalValue, proceed = arguments.length === 0 || typeof value === 'string' && value, i = 0, len =         $that.length;
    if (jQuery.isFunction(value)) {
        return        $that.each(function (j) {
            jQuery(this).removeClass(value.call(this, j, this.className));
        });
    }
    if (proceed) {
        classes = (value || '').match(rnotwhite) || [];
        for (; i < len; i++) {
            elem =             $that[i];
            // This expression is here for better compressibility (see addClass)
            cur = elem.nodeType === 1 && (elem.className ? (' ' + elem.className + ' ').replace(rclass, ' ') : '');
            if (cur) {
                j = 0;
                while (clazz = classes[j++]) {
                    // Remove *all* instances
                    while (cur.indexOf(' ' + clazz + ' ') >= 0) {
                        cur = cur.replace(' ' + clazz + ' ', ' ');
                    }
                }
                // Only assign if different to avoid unneeded rendering.
                finalValue = value ? jQuery.trim(cur) : '';
                if (elem.className !== finalValue) {
                    elem.className = finalValue;
                }
            }
        }
    }
    return    $that;
}})();