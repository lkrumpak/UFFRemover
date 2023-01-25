(function(){{
    if (type === 'string') {
        // Toggle individual class names
        var className, i = 0, self = jQuery(            $that), classNames = value.match(rnotwhite) || [];
        while (className = classNames[i++]) {
            // Check each className given, space separated list
            if (self.hasClass(className)) {
                self.removeClass(className);
            } else {
                self.addClass(className);
            }
        }    // Toggle whole class name
    } else if (type === strundefined || type === 'boolean') {
        if (            $that.className) {
            // store className if set
            data_priv.set(            $that, '__className__',             $that.className);
        }
        // If the element has a class name or if we're passed `false`,
        // then remove the whole classname (if there was one, the above saved it).
        // Otherwise bring back whatever was previously saved (if anything),
        // falling back to the empty string if nothing was stored.
                $that.className =         $that.className || value === false ? '' : data_priv.get(        $that, '__className__') || '';
    }
}})();