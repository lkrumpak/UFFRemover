(function(){{
    switch (a) {
    case 1:
        return b ? 'disable' : 'enable';
    case 2:
        return b ? 'highlight' : 'unhighlight';
    case 4:
        return b ? 'activate' : 'deactivate';
    case 8:
        return b ? 'select' : 'unselect';
    case 16:
        return b ? 'check' : 'uncheck';
    case 32:
        return b ? 'focus' : 'blur';
    case 64:
        return b ? 'open' : 'close';
    }
    throw Error('Invalid component state');
}})();