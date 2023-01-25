(function(){{
    var i =     $that.get('items').length;
    var completed = event.node.checked;
    var changeHash = {};
    while (i--) {
        changeHash['items[' + i + '].completed'] = completed;
    }
        $that.set(changeHash);
}})();