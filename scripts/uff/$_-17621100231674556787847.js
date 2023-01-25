(function(){{
    var c = r('[data-id="' + a + '"]');
    c.removeChild(r('input.edit', c));
    c.classList.remove('editing');
    r('label', c).textContent = b;
}})();