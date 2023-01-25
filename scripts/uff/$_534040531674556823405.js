(function(){{
    return // not null/false
    !!obj && (typeof obj == 'object' || typeof obj == 'function') && 'length' in obj && // not window
    !('setInterval' in obj) && typeof obj.nodeType != 'number' && (Array.isArray(obj) || 'callee' in obj || 'item' in obj);
}})();