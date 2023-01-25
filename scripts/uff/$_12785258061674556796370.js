(function(){{
        $that._input = input;
        $that._more =     $that._less =     $that.done = false;
        $that.yylineno =     $that.yyleng = 0;
        $that.yytext =     $that.matched =     $that.match = '';
        $that.conditionStack = ['INITIAL'];
        $that.yylloc = {
        first_line: 1,
        first_column: 0,
        last_line: 1,
        last_column: 0
    };
    if (        $that.options.ranges)
                $that.yylloc.range = [
            0,
            0
        ];
        $that.offset = 0;
    return    $that;
}})();