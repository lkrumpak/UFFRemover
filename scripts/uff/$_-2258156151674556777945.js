(function(){{
    return makeRequest(    $that,     $that.isNew() ? 'create' : 'update', success, error);
}})();