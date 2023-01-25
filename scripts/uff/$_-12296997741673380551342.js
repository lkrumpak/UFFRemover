(function(){{
    var parentFragment;
    if (parentFragment = item.parentFragment) {
        return parentFragment.owner;
    }
    if (item.component && (parentFragment = item.component.parentFragment)) {
        return parentFragment.owner;
    }
}})();