(function(){{
        $that.parentFragment = component.parentFragment;
        $that.component = component;
        $that.key = key;
        $that.fragment = new StringFragment({
        descriptor: value,
        root: component.root,
        owner:         $that,
        contextStack: component.parentFragment.contextStack
    });
        $that.selfUpdating =     $that.fragment.isSimple();
        $that.value =     $that.fragment.getValue();
}})();