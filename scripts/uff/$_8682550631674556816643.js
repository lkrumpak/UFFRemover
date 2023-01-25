(function(){{
    var id, fragment;
    while (fragment =         $that.fragments.shift()) {
        fragment.teardown(destroy);
    }
    if (        $that.fragmentsById) {
        for (id in            $that.fragmentsById) {
            if (                $that.fragments[id]) {
                                $that.fragmentsById[id].teardown(destroy);
                                $that.fragmentsById[id] = null;
            }
        }
    }
}})();