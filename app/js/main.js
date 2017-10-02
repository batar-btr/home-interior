(function (){
    'use strict';

    // function showNavBar () {
    //     var navBar = document.querySelector('.navbar');
    //     navBar.classList.toggle('active');
    // }

    // var burger = document.querySelector('.burger');

    // burger.addEventListener('click', showNavBar);
    // setTimeout(function() {
    //     window.scrollTo(0, 100);
    // } , 100);

})();

$(document).ready(function() {
	$('#fullpage').fullpage({
        scrollOverflow: true,
        anchors:['firstPage', 'secondPage', 'thirdPage'],
        menu: '#myMenu'
    });
});