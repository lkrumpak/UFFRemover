(function(){{
    return !(D('iPad') || D('Android') && !D('Mobile') || D('Silk')) && (D('iPod') || D('iPhone') || D('Android') || D('IEMobile'));
}})();