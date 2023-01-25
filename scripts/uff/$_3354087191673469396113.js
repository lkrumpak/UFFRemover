(function(){{
    if (toString.call(name) === objectType) {
        Utils.extend(        $that.partials, name);
    } else {
                $that.partials[name] = str;
    }
}})();