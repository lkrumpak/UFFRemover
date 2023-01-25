(function(){{
    var t =         $that, name, fragment, errorMessage;
        $that.root = root;
        $that.node = owner.node;
        $that.isIntro = isIntro;
        $that.originalStyle =     $that.node.getAttribute('style');
        $that.complete = function (noReset) {
        if (!noReset && t.isIntro) {
            t.resetStyle();
        }
        t._manager.pop(t.node);
        t.node._ractive.transition = null;
    };
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
        $that.name = name;
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
        $that._fn = root.transitions[name];
    if (!        $that._fn) {
        errorMessage = 'Missing "' + name + '" transition. You may need to download a plugin via https://github.com/RactiveJS/Ractive/wiki/Plugins#transitions';
        if (root.debug) {
            throw new Error(errorMessage);
        } else {
            warn(errorMessage);
        }
        return;
    }
}})();