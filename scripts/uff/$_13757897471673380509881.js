(function(){{
        $that.$raiseEvent({
        name: 'classReady',
        refClasspath:         $that._refClasspath
    }),     $that.$raiseEvent({
        name: 'complete',
        refClasspath:         $that._refClasspath
    });
}})();