(function(){{
    var name = elem.nodeName.toLowerCase();
    return (name === 'input' || name === 'button') && elem.type === type;
}})();