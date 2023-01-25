(function(){{
    // First, attempt to store a copy or reference of any
    // data that might've been store with a camelCased key.
    var data = data_user.get(    $that, camelKey);
    // For HTML5 data-* attribute interop, we have to
    // store property names with dashes in a camelCase form.
    // This might not apply to all properties...*
    data_user.set(    $that, camelKey, value);
    // *... In the case of properties that might _actually_
    // have dashes, we need to also store a copy of that
    // unchanged property.
    if (key.indexOf('-') !== -1 && data !== undefined) {
        data_user.set(        $that, key, value);
    }
}})();