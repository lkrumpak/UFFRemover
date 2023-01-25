(function(){{
    var type =     $that.classifySexpr(sexpr);
    if (type === 'simple') {
                $that.simpleSexpr(sexpr);
    } else if (type === 'helper') {
                $that.helperSexpr(sexpr);
    } else {
                $that.ambiguousSexpr(sexpr);
    }
}})();