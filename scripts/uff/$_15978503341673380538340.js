(function(){{
    var ch =     $that._input[0];
        $that.yytext += ch;
        $that.yyleng++;
        $that.offset++;
        $that.match += ch;
        $that.matched += ch;
    var lines = ch.match(/(?:\r\n?|\n).*/g);
    if (lines) {
                $that.yylineno++;
                $that.yylloc.last_line++;
    } else {
                $that.yylloc.last_column++;
    }
    if (        $that.options.ranges)
                $that.yylloc.range[1]++;
        $that._input =     $that._input.slice(1);
    return ch;
}})();