(function(){{
    var locals =     $that.stackVars.concat(    $that.registers.list);
    if (locals.length > 0) {
                $that.source[1] =         $that.source[1] + ', ' + locals.join(', ');
    }
    // Generate minimizer alias mappings
    if (!        $that.isChild) {
        for (var alias in            $that.context.aliases) {
            if (                $that.context.aliases.hasOwnProperty(alias)) {
                                $that.source[1] =                 $that.source[1] + ', ' + alias + '=' +                $that.context.aliases[alias];
            }
        }
    }
    if (        $that.source[1]) {
                $that.source[1] = 'var ' +        $that.source[1].substring(2) + ';';
    }
    // Merge children
    if (!        $that.isChild) {
                $that.source[1] += '\n' +        $that.context.programs.join('\n') + '\n';
    }
    if (!        $that.environment.isSimple) {
                $that.pushSource('return buffer;');
    }
    var params =     $that.isChild ? [
        'depth0',
        'data'
    ] : [
        'Handlebars',
        'depth0',
        'helpers',
        'partials',
        'data'
    ];
    for (var i = 0, l =             $that.environment.depths.list.length; i < l; i++) {
        params.push('depth' +        $that.environment.depths.list[i]);
    }
    // Perform a second pass over the output to merge content when possible
    var source =     $that.mergeSource();
    if (!        $that.isChild) {
        source =         $that.compilerInfo() + source;
    }
    if (asObject) {
        params.push(source);
        return Function.apply(        $that, params);
    } else {
        var functionSource = 'function ' + (        $that.name || '') + '(' + params.join(',') + ') {\n  ' + source + '}';
        log('debug', functionSource + '\n\n');
        return functionSource;
    }
}})();