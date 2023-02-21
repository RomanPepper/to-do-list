document.querySelector('.hamburger').onclick = function () {
    document.querySelector('.nav__body_side').classList.toggle('nav__body_side_active');
    
    let linkArray = document.querySelectorAll('.nav__body_side .nav__item a');
    linkArray.forEach(
        function (i) {
            i.classList.toggle('nav__link_active');
        }
    )
}