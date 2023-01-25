(function(){{
        $that.replaceStack(function (current) {
        return current + ' == null || ' + current + ' === false ? ' + current + ' : ' + this.nameLookup(current, name, 'context');
    });
}})();