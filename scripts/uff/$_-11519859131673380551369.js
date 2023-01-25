(function(){{
    if (!        $that.node.type ||        $that.node.type === 'text/javascript') {
        warn('Script tag was updated. This does not cause the code to be re-evaluated!');
    }
        $that.node.innerHTML =     $that.fragment.toString();
}})();