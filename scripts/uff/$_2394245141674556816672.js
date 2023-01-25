(function(){{
    var str, i, len;
    str = '<' + (    $that.descriptor.y ? '!doctype' :     $that.descriptor.e);
    len =     $that.attributes.length;
    for (i = 0; i < len; i += 1) {
        str += ' ' +        $that.attributes[i].toString();
    }
    str += '>';
    if (        $that.html) {
        str +=         $that.html;
    } else if (        $that.fragment) {
        str +=         $that.fragment.toString();
    }
    if (voidElementNames.indexOf(        $that.descriptor.e) === -1) {
        str += '</' +        $that.descriptor.e + '>';
    }
    return str;
}})();