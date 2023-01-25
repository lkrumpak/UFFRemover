(function(){{
    word = word.toLowerCase();
    return result + (index ? word.charAt(0).toUpperCase() + word.slice(1) : word);
}})();