(function(){{
    'production' !== 'development' ? invariant(ExecutionEnvironment.canUseDOM, 'dangerouslyRenderMarkup(...): Cannot render markup in a worker ' + 'thread. Make sure `window` and `document` are available globally ' + 'before requiring React when unit testing or use ' + 'React.renderToString for server rendering.') : invariant(ExecutionEnvironment.canUseDOM);
    var nodeName;
    var markupByNodeName = {};
    // Group markup by `nodeName` if a wrap is necessary, else by '*'.
    for (var i = 0; i < markupList.length; i++) {
        'production' !== 'development' ? invariant(markupList[i], 'dangerouslyRenderMarkup(...): Missing markup.') : invariant(markupList[i]);
        nodeName = getNodeName(markupList[i]);
        nodeName = getMarkupWrap(nodeName) ? nodeName : '*';
        markupByNodeName[nodeName] = markupByNodeName[nodeName] || [];
        markupByNodeName[nodeName][i] = markupList[i];
    }
    var resultList = [];
    var resultListAssignmentCount = 0;
    for (nodeName in markupByNodeName) {
        if (!markupByNodeName.hasOwnProperty(nodeName)) {
            continue;
        }
        var markupListByNodeName = markupByNodeName[nodeName];
        // This for-in loop skips the holes of the sparse array. The order of
        // iteration should follow the order of assignment, which happens to match
        // numerical index order, but we don't rely on that.
        var resultIndex;
        for (resultIndex in markupListByNodeName) {
            if (markupListByNodeName.hasOwnProperty(resultIndex)) {
                var markup = markupListByNodeName[resultIndex];
                // Push the requested markup with an additional RESULT_INDEX_ATTR
                // attribute.  If the markup does not start with a < character, it
                // will be discarded below (with an appropriate console.error).
                markupListByNodeName[resultIndex] = markup.replace(OPEN_TAG_NAME_EXP, // This index will be parsed back out below.
                '$1 ' + RESULT_INDEX_ATTR + '="' + resultIndex + '" ');
            }
        }
        // Render each group of markup with similar wrapping `nodeName`.
        var renderNodes = createNodesFromMarkup(markupListByNodeName.join(''), emptyFunction    // Do nothing special with <script> tags.
);
        for (var j = 0; j < renderNodes.length; ++j) {
            var renderNode = renderNodes[j];
            if (renderNode.hasAttribute && renderNode.hasAttribute(RESULT_INDEX_ATTR)) {
                resultIndex = +renderNode.getAttribute(RESULT_INDEX_ATTR);
                renderNode.removeAttribute(RESULT_INDEX_ATTR);
                'production' !== 'development' ? invariant(!resultList.hasOwnProperty(resultIndex), 'Danger: Assigning to an already-occupied result index.') : invariant(!resultList.hasOwnProperty(resultIndex));
                resultList[resultIndex] = renderNode;
                // This should match resultList.length and markupList.length when
                // we're done.
                resultListAssignmentCount += 1;
            } else if ('production' !== 'development') {
                console.error('Danger: Discarding unexpected node:', renderNode);
            }
        }
    }
    // Although resultList was populated out of order, it should now be a dense
    // array.
    'production' !== 'development' ? invariant(resultListAssignmentCount === resultList.length, 'Danger: Did not assign to every index of resultList.') : invariant(resultListAssignmentCount === resultList.length);
    'production' !== 'development' ? invariant(resultList.length === markupList.length, 'Danger: Expected markup to render %s nodes, but rendered %s.', markupList.length, resultList.length) : invariant(resultList.length === markupList.length);
    return resultList;
}})();