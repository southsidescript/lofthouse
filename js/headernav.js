$(function(){
    let navbtn = $('.header__nav-btn');
    let navrow = $('.header__top-row');
    let navicon = $('.nav-icon');

    navbtn.on('click',()=>{
        if(navicon.hasClass('nav-icon--active')){
            navicon.removeClass('nav-icon--active')
            navrow.removeClass('header__top-row--mobile')

        }else{ 
             navicon.addClass('nav-icon--active')
             navrow.addClass('header__top-row--mobile')
            }
    })
})