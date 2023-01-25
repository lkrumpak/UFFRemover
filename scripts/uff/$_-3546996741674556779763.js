(function(){{
    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
    var prevChildMapping =     $that.state.children;
        $that.setState({ children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping) });
    var key;
    for (key in nextChildMapping) {
        var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
        if (nextChildMapping[key] && !hasPrev && !            $that.currentlyTransitioningKeys[key]) {
                        $that.keysToEnter.push(key);
        }
    }
    for (key in prevChildMapping) {
        var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
        if (prevChildMapping[key] && !hasNext && !            $that.currentlyTransitioningKeys[key]) {
                        $that.keysToLeave.push(key);
        }
    }    // If we want to someday check for reordering, we could do it here.
}})();