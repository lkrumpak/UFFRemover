(function(){{
    if (        $that.done) {
        return        $that.EOF;
    }
    if (!        $that._input)
                $that.done = true;
    var token, match, tempMatch, index, col, lines;
    if (!        $that._more) {
                $that.yytext = '';
                $that.match = '';
    }
    var rules =     $that._currentRules();
    for (var i = 0; i < rules.length; i++) {
        tempMatch =         $that._input.match(        $that.rules[rules[i]]);
        if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
            match = tempMatch;
            index = i;
            if (!                $that.options.flex)
                break;
        }
    }
    if (match) {
        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines)
                        $that.yylineno += lines.length;
                $that.yylloc = {
            first_line:             $that.yylloc.last_line,
            last_line:             $that.yylineno + 1,
            first_column:             $that.yylloc.last_column,
            last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :             $that.yylloc.last_column + match[0].length
        };
                $that.yytext += match[0];
                $that.match += match[0];
                $that.matches = match;
                $that.yyleng =         $that.yytext.length;
        if (            $that.options.ranges) {
                        $that.yylloc.range = [
                                $that.offset,
                                $that.offset +=                 $that.yyleng
            ];
        }
                $that._more = false;
                $that._input =         $that._input.slice(match[0].length);
                $that.matched += match[0];
        token =         $that.performAction.call(        $that,         $that.yy,         $that, rules[index],         $that.conditionStack[        $that.conditionStack.length - 1]);
        if (            $that.done &&            $that._input)
                        $that.done = false;
        if (token)
            return token;
        else
            return;
    }
    if (        $that._input === '') {
        return        $that.EOF;
    } else {
        return        $that.parseError('Lexical error on line ' + (        $that.yylineno + 1) + '. Unrecognized text.\n' +        $that.showPosition(), {
            text: '',
            token: null,
            line:             $that.yylineno
        });
    }
}})();