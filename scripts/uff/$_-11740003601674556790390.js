(function(){{
    var data = templates.getData();
    for (var key in templates.getData()) {
        if (data.hasOwnProperty(key)) {
            templates.get(key).render();
        }
    }
}})();