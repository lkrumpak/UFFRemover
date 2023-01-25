(function(){{
    if ('production' !== 'development') {
        'production' !== 'development' ? warning(warned, 'React.addons.classSet will be deprecated in a future version. See ' + 'http://fb.me/react-addons-classset') : null;
        warned = true;
    }
    if (typeof classNames == 'object') {
        return Object.keys(classNames).filter(function (className) {
            return classNames[className];
        }).join(' ');
    } else {
        return Array.prototype.join.call(arguments, ' ');
    }
}})();