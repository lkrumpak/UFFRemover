(function(){{
    var ext, index = moduleNamePlusExt.lastIndexOf('.'), segment = moduleNamePlusExt.split('/')[0], isRelative = segment === '.' || segment === '..';
    //Have a file extension alias, and it is not the
    //dots from a relative path.
    if (index !== -1 && (!isRelative || index > 1)) {
        ext = moduleNamePlusExt.substring(index, moduleNamePlusExt.length);
        moduleNamePlusExt = moduleNamePlusExt.substring(0, index);
    }
    return context.nameToUrl(normalize(moduleNamePlusExt, relMap && relMap.id, true), ext, true);
}})();