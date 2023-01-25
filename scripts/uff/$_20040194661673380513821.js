(function(){{
    'production' !== 'development' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : null;
    Object.defineProperty(    $that, 'type', { value: type });
    return type;
}})();