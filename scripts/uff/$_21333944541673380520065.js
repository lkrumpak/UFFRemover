(function(){{
    if (        $that.yy.parser) {
                $that.yy.parser.parseError(str, hash);
    } else {
        throw new Error(str);
    }
}})();