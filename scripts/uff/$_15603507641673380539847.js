(function(){{
    if (typeof container === 'string') {
        container =         $that.query(container);
    }
        $that.registerSubview(view);
    view.render();
    (container ||    $that.el).appendChild(view.el);
    return view;
}})();