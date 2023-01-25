(function(){{
    var fragmentOptions;
    if (methodName === 'push' || methodName === 'unshift' || methodName === 'splice') {
        fragmentOptions = {
            descriptor:             $that.descriptor.f,
            root:             $that.root,
            pNode:             $that.parentFragment.pNode,
            owner:             $that
        };
        if (            $that.descriptor.i) {
            fragmentOptions.indexRef =             $that.descriptor.i;
        }
    }
    if (        $that[methodName]) {
                $that.rendering = true;
                $that[methodName](fragmentOptions, args);
                $that.rendering = false;
    }
}})();