(function(){{
    if (typeof ref === 'function') {
        ref(null);
    } else {
        // Legacy ref
        ReactOwner.removeComponentAsRefFrom(component, ref, owner);
    }
}})();