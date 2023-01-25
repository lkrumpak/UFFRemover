(function(){{
    var $0 = $$.length - 1;
    switch (yystate) {
    case 1:
        return new yy.ProgramNode($$[$0 - 1],         $that._$);
        break;
    case 2:
        return new yy.ProgramNode([],         $that._$);
        break;
    case 3:
                $that.$ = new yy.ProgramNode([], $$[$0 - 1], $$[$0],         $that._$);
        break;
    case 4:
                $that.$ = new yy.ProgramNode($$[$0 - 2], $$[$0 - 1], $$[$0],         $that._$);
        break;
    case 5:
                $that.$ = new yy.ProgramNode($$[$0 - 1], $$[$0], [],         $that._$);
        break;
    case 6:
                $that.$ = new yy.ProgramNode($$[$0],         $that._$);
        break;
    case 7:
                $that.$ = new yy.ProgramNode([],         $that._$);
        break;
    case 8:
                $that.$ = new yy.ProgramNode([],         $that._$);
        break;
    case 9:
                $that.$ = [$$[$0]];
        break;
    case 10:
        $$[$0 - 1].push($$[$0]);
                $that.$ = $$[$0 - 1];
        break;
    case 11:
                $that.$ = new yy.BlockNode($$[$0 - 2], $$[$0 - 1].inverse, $$[$0 - 1], $$[$0],         $that._$);
        break;
    case 12:
                $that.$ = new yy.BlockNode($$[$0 - 2], $$[$0 - 1], $$[$0 - 1].inverse, $$[$0],         $that._$);
        break;
    case 13:
                $that.$ = $$[$0];
        break;
    case 14:
                $that.$ = $$[$0];
        break;
    case 15:
                $that.$ = new yy.ContentNode($$[$0],         $that._$);
        break;
    case 16:
                $that.$ = new yy.CommentNode($$[$0],         $that._$);
        break;
    case 17:
                $that.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], stripFlags($$[$0 - 2], $$[$0]),         $that._$);
        break;
    case 18:
                $that.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], stripFlags($$[$0 - 2], $$[$0]),         $that._$);
        break;
    case 19:
                $that.$ = {
            path: $$[$0 - 1],
            strip: stripFlags($$[$0 - 2], $$[$0])
        };
        break;
    case 20:
                $that.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], stripFlags($$[$0 - 2], $$[$0]),         $that._$);
        break;
    case 21:
                $that.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], stripFlags($$[$0 - 2], $$[$0]),         $that._$);
        break;
    case 22:
                $that.$ = new yy.PartialNode($$[$0 - 2], $$[$0 - 1], stripFlags($$[$0 - 3], $$[$0]),         $that._$);
        break;
    case 23:
                $that.$ = stripFlags($$[$0 - 1], $$[$0]);
        break;
    case 24:
                $that.$ = new yy.SexprNode([$$[$0 - 2]].concat($$[$0 - 1]), $$[$0],         $that._$);
        break;
    case 25:
                $that.$ = new yy.SexprNode([$$[$0]], null,         $that._$);
        break;
    case 26:
                $that.$ = $$[$0];
        break;
    case 27:
                $that.$ = new yy.StringNode($$[$0],         $that._$);
        break;
    case 28:
                $that.$ = new yy.IntegerNode($$[$0],         $that._$);
        break;
    case 29:
                $that.$ = new yy.BooleanNode($$[$0],         $that._$);
        break;
    case 30:
                $that.$ = $$[$0];
        break;
    case 31:
        $$[$0 - 1].isHelper = true;
                $that.$ = $$[$0 - 1];
        break;
    case 32:
                $that.$ = new yy.HashNode($$[$0],         $that._$);
        break;
    case 33:
                $that.$ = [
            $$[$0 - 2],
            $$[$0]
        ];
        break;
    case 34:
                $that.$ = new yy.PartialNameNode($$[$0],         $that._$);
        break;
    case 35:
                $that.$ = new yy.PartialNameNode(new yy.StringNode($$[$0],         $that._$),         $that._$);
        break;
    case 36:
                $that.$ = new yy.PartialNameNode(new yy.IntegerNode($$[$0],         $that._$));
        break;
    case 37:
                $that.$ = new yy.DataNode($$[$0],         $that._$);
        break;
    case 38:
                $that.$ = new yy.IdNode($$[$0],         $that._$);
        break;
    case 39:
        $$[$0 - 2].push({
            part: $$[$0],
            separator: $$[$0 - 1]
        });
                $that.$ = $$[$0 - 2];
        break;
    case 40:
                $that.$ = [{ part: $$[$0] }];
        break;
    case 43:
                $that.$ = [];
        break;
    case 44:
        $$[$0 - 1].push($$[$0]);
        break;
    case 47:
                $that.$ = [$$[$0]];
        break;
    case 48:
        $$[$0 - 1].push($$[$0]);
        break;
    }
}})();