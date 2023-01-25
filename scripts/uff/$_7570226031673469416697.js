(function(){{
    target = getElement(target);
    anchor = getElement(anchor) || null;
    if (!target) {
        throw new Error('You must specify a valid target to insert into');
    }
    target.insertBefore(    $that.detach(), anchor);
        $that.fragment.pNode = target;
}})();