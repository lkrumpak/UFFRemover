(function(){{
    // Sometimes this is 'unknown' in IE and will throw an exception if it is
    if (typeof node.nodeValue !== 'unknown') {
        node.nodeValue = '' + newVal;
    }
    // TODO: remove in 2.1
    data.teardownCheck(node.parentNode);
}})();