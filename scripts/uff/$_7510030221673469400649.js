(function(){{
    // force removing pass
        $that.__patch__(    $that._vnode,     $that.kept, false, // hydrating
    true    // removeOnly (!important, avoids unnecessary moves)
);
        $that._vnode =     $that.kept;
}})();