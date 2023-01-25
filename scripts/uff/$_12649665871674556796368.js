(function(){{
    var self =         $that, stack = [0], vstack = [null], lstack = [], table =         $that.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
        $that.lexer.setInput(input);
        $that.lexer.yy =     $that.yy;
        $that.yy.lexer =     $that.lexer;
        $that.yy.parser =     $that;
    if (typeof        $that.lexer.yylloc == 'undefined')
                $that.lexer.yylloc = {};
    var yyloc =     $that.lexer.yylloc;
    lstack.push(yyloc);
    var ranges =     $that.lexer.options &&    $that.lexer.options.ranges;
    if (typeof        $that.yy.parseError === 'function')
                $that.parseError =         $that.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (            $that.defaultActions[state]) {
            action =             $that.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var errStr = '';
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (                        $that.terminals_[p] && p > 2) {
                        expected.push('\'' +                        $that.terminals_[p] + '\'');
                    }
                if (                    $that.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' +                    $that.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (                    $that.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == 1 ? 'end of input' : '\'' + (                    $that.terminals_[symbol] || symbol) + '\'');
                }
                                $that.parseError(errStr, {
                    text:                     $that.lexer.match,
                    token:                     $that.terminals_[symbol] || symbol,
                    line:                     $that.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(            $that.lexer.yytext);
            lstack.push(            $that.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng =                 $that.lexer.yyleng;
                yytext =                 $that.lexer.yytext;
                yylineno =                 $that.lexer.yylineno;
                yyloc =                 $that.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len =             $that.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r =             $that.performAction.call(yyval, yytext, yyleng, yylineno,             $that.yy, action[1], vstack, lstack);
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(            $that.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}})();