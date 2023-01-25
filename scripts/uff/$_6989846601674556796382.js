(function(){{
        $that.context.aliases.escapeExpression = 'this.escapeExpression';
        $that.pushSource(    $that.appendToBuffer('escapeExpression(' +    $that.popStack() + ')'));
}})();