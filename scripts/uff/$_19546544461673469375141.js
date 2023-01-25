(function(){{
    var t = e.refClasspath;
        $that.$assert(4, t);
    var n = e.src;
    n.$dispose();
    var r = aria.core.Cache.getItem('classes', t);
    r && (r.loader = null, delete r.loader),     $that.$raiseEvent({
        name: 'classComplete',
        refClasspath: t
    });
}})();