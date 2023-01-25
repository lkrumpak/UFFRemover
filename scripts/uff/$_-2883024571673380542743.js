(function(){{
    doc = doc || win.doc;
    return (win.body(doc).dir || doc.documentElement.dir || 'ltr').toLowerCase() == 'ltr';
}})();