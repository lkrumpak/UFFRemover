(function(){{
    var r = /^\s*Aria\.classDefinition\(/;
    if (r.test(e))
                $that._evalGeneratedFile({
            classDef: e,
            scope:             $that
        }, { logicalPath: t });
    else {
        var i = 'aria.templates.' +            $that._classGeneratorClassName, s = [i];
        n && s.push(n), Aria.load({
            classes: s,
            oncomplete: {
                fn:                 $that.__generateClass,
                scope:                 $that,
                args: {
                    classDef: e,
                    logicalPath: t,
                    classpath:                     $that._refClasspath
                }
            }
        });
    }
}})();