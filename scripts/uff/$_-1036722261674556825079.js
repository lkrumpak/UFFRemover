(function(){{
    switch (node.type) {
    case Syntax.DeclareVariable:
    case Syntax.DeclareFunction:
    case Syntax.DeclareClass:
    case Syntax.DeclareModule:
        return true;
    }
    return false;
}})();