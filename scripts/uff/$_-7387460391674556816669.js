(function(){{
    var args =     $that.d.toArgsList();
    if (typeof args === 'string') {
        args = args.substr(1, args.length - 2);
    }
        $that.root.fire.apply(    $that.root, [
                $that.n.toString(),
        event
    ].concat(args));
}})();