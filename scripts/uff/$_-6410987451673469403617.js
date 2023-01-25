(function(){{
    var params = [
                $that.nameLookup('partials', name, 'partial'),
        '\'' + indent + '\'',
        '\'' + name + '\'',
                $that.popStack(),
                $that.popStack(),
        'helpers',
        'partials'
    ];
    if (        $that.options.data) {
        params.push('data');
    } else if (        $that.options.compat) {
        params.push('undefined');
    }
    if (        $that.options.compat) {
        params.push('depths');
    }
        $that.push('this.invokePartial(' + params.join(', ') + ')');
}})();