(function(){{
    // IE support...
    var f = document.getElementById('state-frame');
    var d = f.contentDocument || f.contentWindow.document;
    d.open();
    d.write('<script>_hash = \'' + s + '\'; onload = parent.listener.syncHash;<script>');
    d.close();
}})();