(function(){{
    var displayName =     $that.displayName ||    $that.name || 'Component';
    'production' !== 'development' ? warning(false, '%s.type is deprecated. Use %s directly to access the class.', displayName, displayName) : null;
    Object.defineProperty(    $that, 'type', { value:         $that });
    return    $that;
}})();