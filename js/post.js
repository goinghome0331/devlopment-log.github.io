$(document).ready(function () {
    $('.card-text > a').click((event)=>{
        event.preventDefault();
        var link = event.target.href.split('#');
        $('body').animate({scrollTop:$('#'+link[1]).offset().top - $('#'+link[1]).outerHeight()-30},500);
    });
});