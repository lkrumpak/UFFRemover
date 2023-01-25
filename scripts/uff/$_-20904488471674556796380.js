(function(){{
    if (        $that.environment.isSimple) {
        return 'return ' + string + ';';
    } else {
        return {
            appendToBuffer: true,
            content: string,
            toString: function () {
                return 'buffer += ' + string + ';';
            }
        };
    }
}})();