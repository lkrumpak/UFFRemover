(function(){{
    var insertionPoint, addedItems, removedItems, balance, i, start, end, spliceArgs, reassignStart;
    if (!args.length) {
        return;
    }
    start = +(args[0] < 0 ?     $that.length + args[0] : args[0]);
    addedItems = Math.max(0, args.length - 2);
    removedItems = args[1] !== undefined ? args[1] :     $that.length - start;
    removedItems = Math.min(removedItems,     $that.length - start);
    balance = addedItems - removedItems;
    if (!balance) {
        return;
    }
    if (balance < 0) {
        end = start - balance;
        for (i = start; i < end; i += 1) {
                        $that.fragments[i].teardown(true);
        }
                $that.fragments.splice(start, -balance);
    } else {
        end = start + balance;
        insertionPoint =         $that.fragments[start] ?         $that.fragments[start].firstNode() :         $that.parentFragment.findNextNode(        $that);
        spliceArgs = [
            start,
            0
        ].concat(new Array(balance));
                $that.fragments.splice.apply(        $that.fragments, spliceArgs);
        for (i = start; i < end; i += 1) {
            fragmentOptions.contextStack =             $that.contextStack.concat(            $that.keypath + '.' + i);
            fragmentOptions.index = i;
                        $that.fragments[i] =             $that.createFragment(fragmentOptions);
        }
                $that.parentFragment.pNode.insertBefore(        $that.docFrag, insertionPoint);
    }
        $that.length += balance;
    reassignStart = start + addedItems;
    reassignFragments(    $that.root,     $that, reassignStart,     $that.length, balance);
}})();