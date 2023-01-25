(function(){{
    var type = typeof value;
    if (typeof stateVal === 'boolean' && type === 'string') {
        return stateVal ?         $that.addClass(value) :         $that.removeClass(value);
    }
    if (jQuery.isFunction(value)) {
        return        $that.each(function (i) {
            jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
        });
    }
    return    $that.each(function () {
        if (type === 'string') {
            // Toggle individual class names
            var className, i = 0, self = jQuery(this), classNames = value.match(rnotwhite) || [];
            while (className = classNames[i++]) {
                // Check each className given, space separated list
                if (self.hasClass(className)) {
                    self.removeClass(className);
                } else {
                    self.addClass(className);
                }
            }    // Toggle whole class name
        } else if (type === strundefined || type === 'boolean') {
            if (this.className) {
                // store className if set
                data_priv.set(this, '__className__', this.className);
            }
            // If the element has a class name or if we're passed `false`,
            // then remove the whole classname (if there was one, the above saved it).
            // Otherwise bring back whatever was previously saved (if anything),
            // falling back to the empty string if nothing was stored.
            this.className = this.className || value === false ? '' : data_priv.get(this, '__className__') || '';
        }
    });
}})();