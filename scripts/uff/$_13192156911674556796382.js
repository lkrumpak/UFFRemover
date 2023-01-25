(function(){{
        $that.context.aliases.functionType = '"function"';
        $that.replaceStack(function (current) {
        return 'typeof ' + current + ' === functionType ? ' + current + '.apply(depth0) : ' + current;
    });
}})();