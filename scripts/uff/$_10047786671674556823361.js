(function(){{
    // This is a deoptimized path. We optimize for always having an element.
    // This creates an extra internal element.
    var element =     $that._pendingElement ||    $that._currentElement;
        $that._pendingElement = ReactElement.cloneAndReplaceProps(element, assign({}, element.props, partialProps));
    ReactUpdates.enqueueUpdate(    $that, callback);
}})();