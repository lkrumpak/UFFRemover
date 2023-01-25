(function(){{
    if (        $that.expressions) {
        for (var i = 0, l =                 $that.expressions.length; i < l; i++) {
                        $that.expressions[i].dispose();
        }
    }
        $that.value = null;
        $that.node = null;
        $that.attribute = null;
        $that.sequence = null;
        $that.expressions = null;
}})();