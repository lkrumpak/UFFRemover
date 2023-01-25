(function(){{
    var list;
    response =     $that.parse(response);
    if (        $that.responseFilter && typeof        $that.responseFilter === 'function') {
        response =         $that.responseFilter(response);
    }
    list = response;
    if (!(list instanceof Array)) {
                $that.apply(response);
        if (response && response.hasOwnProperty(            $that.itemsProperty)) {
            list = response[            $that.itemsProperty];
        }
    }
        $that.add.apply(    $that, list);
        $that.trigger('fetchSuccess', { response: response });
}})();