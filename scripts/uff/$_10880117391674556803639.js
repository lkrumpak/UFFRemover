(function(){{
    if (type === 'ID' || type === 'DATA') {
                $that.pushString(name);
    } else if (type === 'sexpr') {
                $that.pushStackLiteral('true');
    } else {
                $that.pushStackLiteral('null');
    }
}})();