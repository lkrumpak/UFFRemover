(function(){{
    var result, args;
    if (        $that.params) {
        args = [            $that.node].concat(        $that.params);
        result =         $that.fn.apply(        $that.root, args);
    } else {
        result =         $that.fn.call(        $that.root,         $that.node);
    }
    if (!result || !result.teardown) {
        throw new Error('Decorator definition must return an object with a teardown method');
    }
        $that.teardown = result.teardown;
}})();