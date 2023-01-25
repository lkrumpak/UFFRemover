(function(){{
    var all = ReactTestUtils.scryRenderedDOMComponentsWithTag(root, tagName);
    if (all.length !== 1) {
        throw new Error('Did not find exactly one match for tag:' + tagName);
    }
    return all[0];
}})();