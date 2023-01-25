(function(){{
    function strip(start, end) {
        return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
    }
    var YYSTATE = YY_START;
    switch ($avoiding_name_collisions) {
    case 0:
        if (yy_.yytext.slice(-2) === '\\\\') {
            strip(0, 1);
                        $that.begin('mu');
        } else if (yy_.yytext.slice(-1) === '\\') {
            strip(0, 1);
                        $that.begin('emu');
        } else {
                        $that.begin('mu');
        }
        if (yy_.yytext)
            return 14;
        break;
    case 1:
        return 14;
        break;
    case 2:
                $that.popState();
        return 14;
        break;
    case 3:
        strip(0, 4);
                $that.popState();
        return 15;
        break;
    case 4:
        return 35;
        break;
    case 5:
        return 36;
        break;
    case 6:
        return 25;
        break;
    case 7:
        return 16;
        break;
    case 8:
        return 20;
        break;
    case 9:
        return 19;
        break;
    case 10:
        return 19;
        break;
    case 11:
        return 23;
        break;
    case 12:
        return 22;
        break;
    case 13:
                $that.popState();
                $that.begin('com');
        break;
    case 14:
        strip(3, 5);
                $that.popState();
        return 15;
        break;
    case 15:
        return 22;
        break;
    case 16:
        return 41;
        break;
    case 17:
        return 40;
        break;
    case 18:
        return 40;
        break;
    case 19:
        return 44;
        break;
    case 20:
        // ignore whitespace
        break;
    case 21:
                $that.popState();
        return 24;
        break;
    case 22:
                $that.popState();
        return 18;
        break;
    case 23:
        yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
        return 32;
        break;
    case 24:
        yy_.yytext = strip(1, 2).replace(/\\'/g, '\'');
        return 32;
        break;
    case 25:
        return 42;
        break;
    case 26:
        return 34;
        break;
    case 27:
        return 34;
        break;
    case 28:
        return 33;
        break;
    case 29:
        return 40;
        break;
    case 30:
        yy_.yytext = strip(1, 2);
        return 40;
        break;
    case 31:
        return 'INVALID';
        break;
    case 32:
        return 5;
        break;
    }
}})();