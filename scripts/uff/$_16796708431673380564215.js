(function(){{
    var checksum = adler32(markup);
    return markup.replace('>', ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '">');
}})();