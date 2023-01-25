(function(){{
    var title;
    title =     $that.app.newTitle.trim();
    if (title) {
                $that.app.all.push({ title: title });
    }
    return    $that.app.newTitle = '';
}})();