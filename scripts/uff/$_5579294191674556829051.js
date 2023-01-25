(function(){{
    var self =         $that, fns =         $that.traverse(method, path.replace(QUERY_SEPARATOR, ''),         $that.routes, ''), invoked =         $that._invoked, after;
        $that._invoked = true;
    if (!fns || fns.length === 0) {
                $that.last = [];
        if (typeof            $that.notfound === 'function') {
                        $that.invoke([                $that.notfound], {
                method: method,
                path: path
            }, callback);
        }
        return false;
    }
    if (        $that.recurse === 'forward') {
        fns = fns.reverse();
    }
    function updateAndInvoke() {
        self.last = fns.after;
        self.invoke(self.runlist(fns), self, callback);
    }
    after =     $that.every &&    $that.every.after ? [        $that.every.after].concat(    $that.last) : [        $that.last];
    if (after && after.length > 0 && invoked) {
        if (            $that.async) {
                        $that.invoke(after,             $that, updateAndInvoke);
        } else {
                        $that.invoke(after,             $that);
            updateAndInvoke();
        }
        return true;
    }
    updateAndInvoke();
    return true;
}})();