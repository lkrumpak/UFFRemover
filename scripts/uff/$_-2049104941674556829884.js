(function(){{
    if (typeof ref === 'function') {
        ref(component.getPublicInstance());
    } else {
        // Legacy ref
        ReactOwner.addComponentAsRefTo(component, ref, owner);
    }
}})();