(function(){{
        $that._rootNodeID = rootID;
    var escapedText = escapeTextContentForBrowser(    $that._stringText);
    if (transaction.renderToStaticMarkup) {
        // Normally we'd wrap this in a `span` for the reasons stated above, but
        // since this is a situation where React won't take over (static pages),
        // we can simply return the text as it is.
        return escapedText;
    }
    return '<span ' + DOMPropertyOperations.createMarkupForID(rootID) + '>' + escapedText + '</span>';
}})();