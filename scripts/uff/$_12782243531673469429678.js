(function(){{
    /*jshint validthis:true */
    if (        $that._pendingUpdate) {
                $that._pendingUpdate = false;
        var value = LinkedValueUtils.getValue(        $that);
        if (value != null &&            $that.isMounted()) {
            updateOptions(            $that, value);
        }
    }
}})();