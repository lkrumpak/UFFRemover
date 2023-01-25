(function(){{
    context.called = name;
    return method.apply(context, [        $that.nodeName ? can.$(        $that) :         $that].concat(slice.call(arguments, 0)));
}})();