(function(){{
    var wrapped;
    if (wrapped =         $that.root._wrapped[        $that.keypath]) {
        value = wrapped.get();
    }
    updateSection(    $that, value);
        $that.parentFragment.bubble();
}})();