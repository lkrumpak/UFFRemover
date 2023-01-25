(function(){{
    // If value is a function, invoke it and return its value
    value = jQuery.isFunction(value) ? value() : value == null ? '' : value;
    s[s.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value);
}})();