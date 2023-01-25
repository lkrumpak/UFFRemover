(function(){{
    // If an item is out of the boundary
    idx = Number(idx);
    if (idx < _start || idx >= _start + _tmpNb || !_model.has(idx)) {
        // Mark it
        marked.push(idx);
    }
}})();