(function(){{
    if (filePath.indexOf('.') === 0) {
        return normalize(filePath, path.dirname(module.filename));
    } else {
        return filePath;
    }
}})();