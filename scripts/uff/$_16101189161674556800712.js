(function(){{
    var arguments$1 = arguments;
    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
        args[i] = arguments$1[i];
    }
    var result = original.apply(    $that, args);
    var ob =     $that.__ob__;
    var inserted;
    switch (method) {
    case 'push':
        inserted = args;
        break;
    case 'unshift':
        inserted = args;
        break;
    case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) {
        ob.observeArray(inserted);
    }
    // notify change
    ob.dep.notify();
    return result;
}})();