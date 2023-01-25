(function(){{
    var key = 'alt.js.org';
    if (typeof window !== 'undefined') {
        window[key] = window[key] || [];
        window[key].push({
            name: name,
            alt: alt
        });
    }
    return alt;
}})();