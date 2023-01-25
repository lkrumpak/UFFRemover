(function(){{
    var map =         $that.map, id = map.id,
        //Map already normalized the prefix.
        pluginMap = makeModuleMap(map.prefix);
    //Mark this as a dependency for this plugin, so it
    //can be traced for cycles.
        $that.depMaps.push(pluginMap);
    on(pluginMap, 'defined', bind(    $that, function (plugin) {
        var load, normalizedMap, normalizedMod, bundleId = getOwn(bundlesMap, this.map.id), name = this.map.name, parentName = this.map.parentMap ? this.map.parentMap.name : null, localRequire = context.makeRequire(map.parentMap, { enableBuildCallback: true });
        //If current map is not normalized, wait for that
        //normalized name to load instead of continuing.
        if (this.map.unnormalized) {
            //Normalize the ID if the plugin allows it.
            if (plugin.normalize) {
                name = plugin.normalize(name, function (name) {
                    return normalize(name, parentName, true);
                }) || '';
            }
            //prefix and name should already be normalized, no need
            //for applying map config again either.
            normalizedMap = makeModuleMap(map.prefix + '!' + name, this.map.parentMap);
            on(normalizedMap, 'defined', bind(this, function (value) {
                this.init([], function () {
                    return value;
                }, null, {
                    enabled: true,
                    ignore: true
                });
            }));
            normalizedMod = getOwn(registry, normalizedMap.id);
            if (normalizedMod) {
                //Mark this as a dependency for this plugin, so it
                //can be traced for cycles.
                this.depMaps.push(normalizedMap);
                if (this.events.error) {
                    normalizedMod.on('error', bind(this, function (err) {
                        this.emit('error', err);
                    }));
                }
                normalizedMod.enable();
            }
            return;
        }
        //If a paths config, then just load that file instead to
        //resolve the plugin, as it is built into that paths layer.
        if (bundleId) {
            this.map.url = context.nameToUrl(bundleId);
            this.load();
            return;
        }
        load = bind(this, function (value) {
            this.init([], function () {
                return value;
            }, null, { enabled: true });
        });
        load.error = bind(this, function (err) {
            this.inited = true;
            this.error = err;
            err.requireModules = [id];
            //Remove temp unnormalized modules for this module,
            //since they will never be resolved otherwise now.
            eachProp(registry, function (mod) {
                if (mod.map.id.indexOf(id + '_unnormalized') === 0) {
                    cleanRegistry(mod.map.id);
                }
            });
            onError(err);
        });
        //Allow plugins to load other code without having to know the
        //context or how to 'complete' the load.
        load.fromText = bind(this, function (text, textAlt) {
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
            this.depMaps.push(moduleMap);
            //Support anonymous modules.
            context.completeLoad(moduleName);
            //Bind the value of that module to the value for this
            //resource ID.
            localRequire([moduleName], load);
        });
        //Use parentName here since the plugin's name is not reliable,
        //could be some weird string with no path that actually wants to
        //reference the parentName's path.
        plugin.load(map.name, localRequire, load, config);
    }));
    context.enable(pluginMap,     $that);
        $that.pluginMaps[pluginMap.id] = pluginMap;
}})();