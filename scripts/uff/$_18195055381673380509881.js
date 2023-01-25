(function(){{
    var t = aria.templates[    $that._classGeneratorClassName];
    try {
        t.parseTemplate(e.classDef, !1, {
            fn:             $that.__evalGeneratedClass,
            scope:             $that,
            args: {
                logicalPath: e.logicalPath,
                classGenerator: t
            }
        }, { file_classpath: e.logicalPath });
    } catch (n) {
                $that.$logError(        $that.CLASS_LOAD_ERROR, [            $that._refClasspath], n);
    }
}})();