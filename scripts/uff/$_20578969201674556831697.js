(function(){{
    var charsWritten = blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    return charsWritten;
}})();