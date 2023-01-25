(function(){{
    /*jslint evil: true */
    var moduleName = map.name, moduleMap = makeModuleMap(moduleName), hasInteractive = useInteractive;
    //As of 2.1.0, support just passing the text, to reinforce
    //fromText only being called once per resource. Still
    //support old style of passing moduleName but discard
    //that moduleName in favor of the internal ref.
    if (textAlt) {
        text = textAlt;
    }
    //Turn off interactive script matching for IE for any define
    //calls in the text, then turn it back on at the end.
    if (hasInteractive) {
        useInteractive = false;
    }
    //Prime the system by creating a module instance for
    //it.
    getModule(moduleMap);
    //Transfer any config to this other module.
    if (hasProp(config.config, id)) {
        config.config[moduleName] = config.config[id];
    }
    try {
        req.exec(text);
    } catch (e) {
        return onError(makeError('fromtexteval', 'fromText eval for ' + id + ' failed: ' + e, e, [id]));
    }
    if (hasInteractive) {
        useInteractive = true;
    }
    //Mark this as a dependency for the plugin
    //resource
        $that.depMaps.push(moduleMap);
    //Support anonymous modules.
    context.completeLoad(moduleName);
    //Bind the value of that module to the value for this
    //resource ID.
    localRequire([moduleName], load);
}})();