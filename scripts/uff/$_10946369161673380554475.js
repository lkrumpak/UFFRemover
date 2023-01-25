(function(){{
    response =     $that.parse(response);
    if (        $that.responseFilter && typeof        $that.responseFilter === 'function') {
        response =         $that.responseFilter(response);
    }
        $that.apply(response, true);
        $that.trigger('fetchSuccess', { response: response });
}})();