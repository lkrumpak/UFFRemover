(function(){{
    if (typeof url === 'object') {
        options = url;
    } else {
        options = clone(options || {});
        options.url = url;
    }
    options.url =     $that.getApiURL(options.url ||    $that.url);
    return Promise.when(    $that, Connectivity.ajax(options)).success(    $that.onFetchSuccess).error(    $that.onFetchError);
}})();