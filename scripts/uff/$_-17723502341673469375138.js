(function(){{
    var n = e.classDef;
    try {
        Aria.eval(n, t.logicalPath),         $that._classDefinitionCalled || (        $that.$logError(        $that.MISSING_CLASS_DEFINITION, [
                        $that.getRefLogicalPath(),
                        $that._refClasspath
        ]), aria.core.ClassMgr.notifyClassLoadError(        $that._refClasspath));
    } catch (r) {
        if (!e.debug && Aria.debug)
            try {
                                $that.__fallbackGenerateClass(t, e.tree);
            } catch (i) {
                                $that.$logError(                $that.TEMPLATE_DEBUG_EVAL_ERROR, [                    $that._refClasspath], i);
            }
        else
                        $that.$logError(            $that.TEMPLATE_EVAL_ERROR, [                $that._refClasspath], r);
    }
}})();