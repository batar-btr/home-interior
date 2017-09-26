(function (){
    'use strict';

    function showNavBar () {
        var navBar = document.querySelector('.navbar');
        navBar.classList.toggle('active');
    }

    var burger = document.querySelector('.burger');

    burger.addEventListener('click', showNavBar);

})();

