(function(){{
        $that.elem = elem;
        $that.prop = prop;
        $that.easing = easing || 'swing';
        $that.options = options;
        $that.start =     $that.now =     $that.cur();
        $that.end = end;
        $that.unit = unit || (jQuery.cssNumber[prop] ? '' : 'px');
}})();