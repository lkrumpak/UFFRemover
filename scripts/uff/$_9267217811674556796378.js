(function(){{
    if (depth === 0) {
        return;
    }
    if (!        $that.depths[depth]) {
                $that.depths[depth] = true;
                $that.depths.list.push(depth);
    }
}})();