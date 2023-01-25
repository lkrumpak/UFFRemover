(function(){{
    // A nodeList of all elements this live-list manages.
    // This is here so that if this live list is within another section
    // that section is able to remove the items in this list.
    var masterNodeList = [el],
        // A mapping of the index of an item to an array
        // of elements that represent the item.
        // Each array is registered so child or parent
        // live structures can update the elements.
        itemIndexToNodeListsMap = [],
        // A mapping of items to their indicies'
        indexMap = [],
        // Called when items are added to the list.
        add = function (ev, items, index) {
            // Collect new html and mappings
            var frag = document.createDocumentFragment(), newNodeLists = [], newIndicies = [];
            // For each new item,
            can.each(items, function (item, key) {
                var itemIndex = can.compute(key + index),
                    // get its string content
                    itemHTML = render.call(context, item, itemIndex),
                    // and convert it into elements.
                    itemFrag = can.view.fragment(itemHTML);
                // Add those elements to the mappings.
                newNodeLists.push(nodeLists.register(can.makeArray(itemFrag.childNodes), undefined, masterNodeList));
                // Hookup the fragment (which sets up child live-bindings) and
                // add it to the collection of all added elements.
                frag.appendChild(can.view.hookup(itemFrag));
                newIndicies.push(itemIndex);
            });
            // Check if we are adding items at the end
            if (!itemIndexToNodeListsMap[index]) {
                elements.after(index === 0 ? [text] : itemIndexToNodeListsMap[index - 1], frag);
            } else {
                // Add elements before the next index's first element.
                var el = itemIndexToNodeListsMap[index][0];
                can.insertBefore(el.parentNode, frag, el);
            }
            splice.apply(itemIndexToNodeListsMap, [
                index,
                0
            ].concat(newNodeLists));
            // update indices after insert point
            splice.apply(indexMap, [
                index,
                0
            ].concat(newIndicies));
            for (var i = index + newIndicies.length, len = indexMap.length; i < len; i++) {
                indexMap[i](i);
            }
        },
        // Called when items are removed or when the bindings are torn down.
        remove = function (ev, items, index, duringTeardown) {
            // If this is because an element was removed, we should
            // check to make sure the live elements are still in the page.
            // If we did this during a teardown, it would cause an infinite loop.
            if (!duringTeardown && data.teardownCheck(text.parentNode)) {
                return;
            }
            var removedMappings = itemIndexToNodeListsMap.splice(index, items.length), itemsToRemove = [];
            can.each(removedMappings, function (nodeList) {
                // add items that we will remove all at once
                [].push.apply(itemsToRemove, nodeList);
                // Update any parent lists to remove these items
                nodeLists.update(nodeList, []);
                // unregister the list
                nodeLists.unregister(nodeList);
            });
            // update indices after remove point
            indexMap.splice(index, items.length);
            for (var i = index, len = indexMap.length; i < len; i++) {
                indexMap[i](i);
            }
            can.remove(can.$(itemsToRemove));
        }, text = document.createTextNode(''),
        // The current list.
        list,
        // Called when the list is replaced with a new list or the binding is torn-down.
        teardownList = function () {
            // there might be no list right away, and the list might be a plain
            // array
            if (list && list.unbind) {
                list.unbind('add', add).unbind('remove', remove);
            }
            // use remove to clean stuff up for us
            remove({}, { length: itemIndexToNodeListsMap.length }, 0, true);
        },
        // Called when the list is replaced or setup.
        updateList = function (ev, newList, oldList) {
            teardownList();
            // make an empty list if the compute returns null or undefined
            list = newList || [];
            // list might be a plain array
            if (list.bind) {
                list.bind('add', add).bind('remove', remove);
            }
            add({}, list, 0);
        };
    parentNode = elements.getParentNode(el, parentNode);
    // Setup binding and teardown to add and remove events
    var data = setup(parentNode, function () {
        if (can.isFunction(compute)) {
            compute.bind('change', updateList);
        }
    }, function () {
        if (can.isFunction(compute)) {
            compute.unbind('change', updateList);
        }
        teardownList();
    });
    live.replace(masterNodeList, text, data.teardownCheck);
    // run the list setup
    updateList({}, can.isFunction(compute) ? compute() : compute);
}})();