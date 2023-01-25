(function(){{
    var name, fragment, errorMessage;
        $that.root = root;
        $that.node = owner.node;
    name = descriptor.n || descriptor;
    if (typeof name !== 'string') {
        fragment = new StringFragment({
            descriptor: name,
            root:             $that.root,
            owner: owner,
            contextStack: contextStack
        });
        name = fragment.toString();
        fragment.teardown();
    }
    if (descriptor.a) {
                $that.params = descriptor.a;
    } else if (descriptor.d) {
        fragment = new StringFragment({
            descriptor: descriptor.d,
            root:             $that.root,
            owner: owner,
            contextStack: contextStack
        });
                $that.params = fragment.toArgsList();
        fragment.teardown();
    }
        $that.fn = root.decorators[name];
    if (!        $that.fn) {
        errorMessage = 'Missing "' + name + '" decorator. You may need to download a plugin via https://github.com/RactiveJS/Ractive/wiki/Plugins#decorators';
        if (root.debug) {
            throw new Error(errorMessage);
        } else {
            warn(errorMessage);
        }
    }
}})();