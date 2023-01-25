(function(){{
    var location, name;
    pkgObj = typeof pkgObj === 'string' ? { name: pkgObj } : pkgObj;
    name = pkgObj.name;
    location = pkgObj.location;
    if (location) {
        config.paths[name] = pkgObj.location;
    }
    //Save pointer to main module ID for pkg name.
    //Remove leading dot in main, so main paths are normalized,
    //and remove any trailing .js, since different package
    //envs have different conventions: some use a module name,
    //some use a file name.
    config.pkgs[name] = pkgObj.name + '/' + (pkgObj.main || 'main').replace(currDirRegExp, '').replace(jsSuffixRegExp, '');
}})();