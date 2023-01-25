(function(){{
    Aria.eval(e, t),     $that._classDefinitionCalled || (    $that.$logError(    $that.MISSING_CLASS_DEFINITION, [
                $that.getRefLogicalPath(),
                $that._refClasspath
    ]), aria.core.ClassMgr.notifyClassLoadError(    $that._refClasspath));
}})();