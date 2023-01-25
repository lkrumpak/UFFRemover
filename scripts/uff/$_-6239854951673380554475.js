(function(){{
    var badURL = '/please_set_model_url', apiRoot = Config.get('apiRoot'), apiURL;
    if (!relPath) {
        return badURL;
    }
    apiURL = (apiRoot || '') + relPath;
    return apiURL;
}})();