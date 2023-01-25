(function(){{
        $that.root = ractive;
        $that.callback = callback;
        $that.defer = options.defer;
        $that.debug = options.debug;
        $that.keypath = keypath;
        $that.regex = new RegExp('^' + keypath.replace(/\./g, '\\.').replace(/\*/g, '[^\\.]+') + '$');
        $that.values = {};
    if (        $that.defer) {
                $that.proxies = [];
    }
        $that.priority = 'pattern';
        $that.context = options && options.context ? options.context : ractive;
}})();