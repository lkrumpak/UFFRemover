(function(){{
    // Only need this for delegated form submit events
    if (jQuery.nodeName(        $that, 'form')) {
        return false;
    }
    // Remove delegated handlers; cleanData eventually reaps submit handlers attached above
    jQuery.event.remove(    $that, '._submit');
}})();