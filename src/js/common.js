'use strict'

function lun() {var mySwiper = new Swiper('.swiper-container', {
    // direction: 'vertical',     纵向了
    loop: false,

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    autoplay: true
});
}
var love = $('#love')
var no_love = $('#no_love')

love.click(function(){
    $('#form1').css('display','block');
    $('#form').css('display','block');
    $('.like').css('display','none');
    lun();
    
});

no_love.click(function(){
    $('#form1').css('display','block');
    $('#form2').css('display','block');
    $('.like').css('display','none');
    lun();
});


