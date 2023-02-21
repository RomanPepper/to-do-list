//Кнопка перехода карусели с окна логина на окно регистрации
document.querySelector('.button__login-switch_to-reg').onclick = function(event) {
    event.preventDefault();
    document.querySelector('.cabinet__carousel').style.left = '-100%';
};

//Кнопка перехода карусели с окна регистрации на окно логина
document.querySelector('.button__login-switch_to-log').onclick = function(event) {
    event.preventDefault();
    document.querySelector('.cabinet__carousel').style.left = '0%';
};
