(function(){{
        $that.$raiseEvent({
        name: 'classError',
        refClasspath:         $that._refClasspath
    }),     $that.$raiseEvent({
        name: 'complete',
        refClasspath:         $that._refClasspath
    });
}})();