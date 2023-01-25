(function(){{
        $that.filter = param.filter;
    /*
          				TODO: Need to figure out why the route doesn't trigger `change` event
           */
    Todo.trigger('refresh');
    return    $that.filters.removeClass('selected').filter('[href=\'#/' +    $that.filter + '\']').addClass('selected');
}})();