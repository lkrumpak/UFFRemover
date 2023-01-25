(function(){{
    var value = LinkedValueUtils.getValue(    $that);
    if (value != null) {
        var rootNode =         $that.getDOMNode();
        // Cast `value` to a string to ensure the value is set correctly. While
        // browsers typically do this as necessary, jsdom doesn't.
        DOMPropertyOperations.setValueForProperty(rootNode, 'value', '' + value);
    }
}})();