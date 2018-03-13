'use strict'

var love = $('#love')
var no_love = $('#no_love')

love.click(function(){
    $('#form').css('display','block');  
});

no_love.click(function(){
    $('#form1').css('display','block');
    $('#form2').css('display','block');
});

$('.yes').click(function(){
    $('#form').css('display','block');
    $('#form1').css('display','none');
    $('#form2').css('display','none');
})

$('.no').click(function(){
    console.log(123);
    $('#form1').css('display','none'); 
    $('#form2').css('display','none'); 
})