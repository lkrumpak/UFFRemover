(function(){{
    if (        $that.originalStyle) {
                $that.node.setAttribute('style',         $that.originalStyle);
    } else {
                $that.node.getAttribute('style');
                $that.node.removeAttribute('style');
    }
}})();