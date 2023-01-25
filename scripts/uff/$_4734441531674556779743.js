(function(){{
    if (nextText !==        $that._currentElement) {
                $that._currentElement = nextText;
        var nextStringText = '' + nextText;
        if (nextStringText !==            $that._stringText) {
            // TODO: Save this as pending props and use performUpdateIfNecessary
            // and/or updateComponent to do the actual update for consistency with
            // other component types?
                        $that._stringText = nextStringText;
            ReactDOMComponent.BackendIDOperations.updateTextContentByID(            $that._rootNodeID, nextStringText);
        }
    }
}})();