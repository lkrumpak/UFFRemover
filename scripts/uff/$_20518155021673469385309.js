(function(){{
    var len = ch.length;
    var lines = ch.split(/(?:\r\n?|\n)/g);
        $that._input = ch +    $that._input;
        $that.yytext =     $that.yytext.substr(0,     $that.yytext.length - len - 1);
    //this.yyleng -= len;
        $that.offset -= len;
    var oldLines =     $that.match.split(/(?:\r\n?|\n)/g);
        $that.match =     $that.match.substr(0,     $that.match.length - 1);
        $that.matched =     $that.matched.substr(0,     $that.matched.length - 1);
    if (lines.length - 1)
                $that.yylineno -= lines.length - 1;
    var r =     $that.yylloc.range;
        $that.yylloc = {
        first_line:         $that.yylloc.first_line,
        last_line:         $that.yylineno + 1,
        first_column:         $that.yylloc.first_column,
        last_column: lines ? (lines.length === oldLines.length ?         $that.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length :         $that.yylloc.first_column - len
    };
    if (        $that.options.ranges) {
                $that.yylloc.range = [
            r[0],
            r[0] +            $that.yyleng - len
        ];
    }
    return    $that;
}})();