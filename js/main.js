let parallax = document.querySelector('.main-content__interlude');

window.onscroll = function (e) {

    if (window.pageYOffset != undefined) {
        console.log(scrollX, scrollY);
        let dsd = scrollY + 'px' + ' ' + scrollY + 'px';
        console.log("gfg", dsd)
        parallax.style.backgroundPosition = 'center' + ' ' + (-(scrollY - 1152) / 2) + 'px';
    } /* else {
        var sx, sy, d = document,
            r = d.documentElement,
            b = d.body;
        sx = r.scrollLeft || b.scrollLeft || 0;
        sy = r.scrollTop || b.scrollTop || 0;

        console.log(sx, sy)
        let dsd = sy + 'px' + ' ' + sy + 'px';
        console.log("gfg", dsd)
        parallax.style.backgroundPosition = sy + 'px' + ' ' + sy + 'px';
    } */


} 