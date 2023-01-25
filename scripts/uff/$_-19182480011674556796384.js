(function(){{
    var params = [
                $that.nameLookup('partials', name, 'partial'),
        '\'' + name + '\'',
                $that.popStack(),
        'helpers',
        'partials'
    ];
    if (        $that.options.data) {
        params.push('data');
    }
        $that.context.aliases.self = 'this';
        $that.push('self.invokePartial(' + params.join(', ') + ')');
}})();