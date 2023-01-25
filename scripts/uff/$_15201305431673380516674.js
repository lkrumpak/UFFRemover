(function(){{
    if (Facade.instanceMap[key] == null)
        return;
    Model.removeModel(key);
    View.removeView(key);
    Controller.removeController(key);
    delete Facade.instanceMap[key];
}})();