(function(){{
    'production' !== 'development' ? invariant(false, '%s tried to unmount. Because of cross-browser quirks it is ' + 'impossible to unmount some top-level components (eg <html>, <head>, ' + 'and <body>) reliably and efficiently. To fix this, have a single ' + 'top-level component that never unmounts render these elements.',     $that.constructor.displayName) : invariant(false);
}})();