(function(){{
    var classes, elem, cur, clazz, j, finalValue, proceed = typeof value === 'string' && value, i = 0, len =         $that.length;
    if (jQuery.isFunction(value)) {
        return        $that.each(function (j) {
            jQuery(this).addClass(value.call(this, j, this.className));
        });
    }
    if (proceed) {
        // The disjunction here is for better compressibility (see removeClass)
        classes = (value || '').match(rnotwhite) || [];
        for (; i < len; i++) {
            elem =             $that[i];
            cur = elem.nodeType === 1 && (elem.className ? (' ' + elem.className + ' ').replace(rclass, ' ') : ' ');
            if (cur) {
                j = 0;
                while (clazz = classes[j++]) {
                    if (cur.indexOf(' ' + clazz + ' ') < 0) {
                        cur += clazz + ' ';
                    }
                }
                // only assign if different to avoid unneeded rendering.
                finalValue = jQuery.trim(cur);
                if (elem.className !== finalValue) {
                    elem.className = finalValue;
                }
            }
        }
    }
    return    $that;
}})();