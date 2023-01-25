(function(){{
    var declaration = null, possibleIdentifierToken, sourceElement, isExportFromIdentifier, src = null, specifiers = [], marker = markerCreate();
    expectKeyword('export');
    if (matchKeyword('default')) {
        // covers:
        // export default ...
        lex();
        if (matchKeyword('function') || matchKeyword('class')) {
            possibleIdentifierToken = lookahead2();
            if (isIdentifierName(possibleIdentifierToken)) {
                // covers:
                // export default function foo () {}
                // export default class foo {}
                sourceElement = parseSourceElement();
                return markerApply(marker, delegate.createExportDeclaration(true, sourceElement, [sourceElement.id], null));
            }
            // covers:
            // export default function () {}
            // export default class {}
            switch (lookahead.value) {
            case 'class':
                return markerApply(marker, delegate.createExportDeclaration(true, parseClassExpression(), [], null));
            case 'function':
                return markerApply(marker, delegate.createExportDeclaration(true, parseFunctionExpression(), [], null));
            }
        }
        if (matchContextualKeyword('from')) {
            throwError({}, Messages.UnexpectedToken, lookahead.value);
        }
        // covers:
        // export default {};
        // export default [];
        if (match('{')) {
            declaration = parseObjectInitialiser();
        } else if (match('[')) {
            declaration = parseArrayInitialiser();
        } else {
            declaration = parseAssignmentExpression();
        }
        consumeSemicolon();
        return markerApply(marker, delegate.createExportDeclaration(true, declaration, [], null));
    }
    // non-default export
    if (lookahead.type === Token.Keyword || matchContextualKeyword('type')) {
        // covers:
        // export var f = 1;
        switch (lookahead.value) {
        case 'type':
        case 'let':
        case 'const':
        case 'var':
        case 'class':
        case 'function':
            return markerApply(marker, delegate.createExportDeclaration(false, parseSourceElement(), specifiers, null));
        }
    }
    if (match('*')) {
        // covers:
        // export * from "foo";
        specifiers.push(parseExportBatchSpecifier());
        if (!matchContextualKeyword('from')) {
            throwError({}, lookahead.value ? Messages.UnexpectedToken : Messages.MissingFromClause, lookahead.value);
        }
        lex();
        src = parseModuleSpecifier();
        consumeSemicolon();
        return markerApply(marker, delegate.createExportDeclaration(false, null, specifiers, src));
    }
    expect('{');
    if (!match('}')) {
        do {
            isExportFromIdentifier = isExportFromIdentifier || matchKeyword('default');
            specifiers.push(parseExportSpecifier());
        } while (match(',') && lex());
    }
    expect('}');
    if (matchContextualKeyword('from')) {
        // covering:
        // export {default} from "foo";
        // export {foo} from "foo";
        lex();
        src = parseModuleSpecifier();
        consumeSemicolon();
    } else if (isExportFromIdentifier) {
        // covering:
        // export {default}; // missing fromClause
        throwError({}, lookahead.value ? Messages.UnexpectedToken : Messages.MissingFromClause, lookahead.value);
    } else {
        // cover
        // export {foo};
        consumeSemicolon();
    }
    return markerApply(marker, delegate.createExportDeclaration(false, declaration, specifiers, src));
}})();