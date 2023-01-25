(function(){{
    var url;
    if (aPath.match(urlRegexp) || aPath.match(dataUrlRegexp)) {
        return aPath;
    }
    if (aPath.charAt(0) === '/' && (url = urlParse(aRoot))) {
        url.path = aPath;
        return urlGenerate(url);
    }
    return aRoot.replace(/\/$/, '') + '/' + aPath;
}})();