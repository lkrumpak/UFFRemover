(function(){{
    var start, end, i;
    start =     $that.length;
    end = start + args.length;
    for (i = start; i < end; i += 1) {
        fragmentOptions.contextStack =         $that.contextStack.concat(        $that.keypath + '.' + i);
        fragmentOptions.index = i;
                $that.fragments[i] =         $that.createFragment(fragmentOptions);
    }
        $that.length += args.length;
        $that.parentFragment.pNode.insertBefore(    $that.docFrag,     $that.parentFragment.findNextNode(    $that));
}})();