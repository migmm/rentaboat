let parallax = document.querySelector('.main-content__interlude');
let seve = parallax.getBoundingClientRect();
window.onscroll = function (e) {
    console.log(seve)
    if (window.pageYOffset != undefined) {
        console.log(scrollX, scrollY);
        let dsd = scrollY + 'px' + ' ' + scrollY + 'px';
        parallax.style.backgroundPosition = 'center' + ' ' + (-(scrollY - 1152) / 2) + 'px';
    } 


} 

