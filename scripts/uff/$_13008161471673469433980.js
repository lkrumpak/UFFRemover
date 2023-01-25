(function(){{
    if (        $that.isCompute(name)) {
        simpleLoop(_computed[name], function (handle) {
            this.unwatchValue(handle);
        },         $that);
                $that.del(name);
        delete _computed[name];
        return true;
    } else {
        return false;
    }
}})();