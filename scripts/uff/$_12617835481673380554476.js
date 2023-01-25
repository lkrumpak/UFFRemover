(function(){{
    var template = Template.get(name);
    if (!template) {
        throw 'No template named "' + name + '"';
    } else {
        return template.render(model);
    }
}})();