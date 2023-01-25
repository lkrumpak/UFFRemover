(function(){{
    var toString, token, tokens;
    toString = String;
    if (typeof code !== 'string' && !(code instanceof String)) {
        code = toString(code);
    }
    delegate = SyntaxTreeDelegate;
    source = code;
    index = 0;
    lineNumber = source.length > 0 ? 1 : 0;
    lineStart = 0;
    length = source.length;
    lookahead = null;
    state = {
        allowKeyword: true,
        allowIn: true,
        labelSet: new StringMap(),
        inFunctionBody: false,
        inIteration: false,
        inSwitch: false,
        lastCommentStart: -1
    };
    extra = {};
    // Options matching.
    options = options || {};
    // Of course we collect tokens here.
    options.tokens = true;
    extra.tokens = [];
    extra.tokenize = true;
    // The following two fields are necessary to compute the Regex tokens.
    extra.openParenToken = -1;
    extra.openCurlyToken = -1;
    extra.range = typeof options.range === 'boolean' && options.range;
    extra.loc = typeof options.loc === 'boolean' && options.loc;
    if (typeof options.comment === 'boolean' && options.comment) {
        extra.comments = [];
    }
    if (typeof options.tolerant === 'boolean' && options.tolerant) {
        extra.errors = [];
    }
    patch();
    try {
        peek();
        if (lookahead.type === Token.EOF) {
            return extra.tokens;
        }
        token = lex();
        while (lookahead.type !== Token.EOF) {
            try {
                token = lex();
            } catch (lexError) {
                token = lookahead;
                if (extra.errors) {
                    extra.errors.push(lexError);
                    // We have to break on the first error
                    // to avoid infinite loops.
                    break;
                } else {
                    throw lexError;
                }
            }
        }
        filterTokenLocation();
        tokens = extra.tokens;
        if (typeof extra.comments !== 'undefined') {
            tokens.comments = extra.comments;
        }
        if (typeof extra.errors !== 'undefined') {
            tokens.errors = extra.errors;
        }
    } catch (e) {
        throw e;
    } finally {
        unpatch();
        extra = {};
    }
    return tokens;
}})();