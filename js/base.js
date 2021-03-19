
$(document).ready(function () {
  var sidebar = $('.sidebar');
  var overlay = $('.overlay');
  var searchResult = $('.search-result');
  var searchbar = $('.search');
  var bisClosed = true;
  var sisClosed = true;
  var hs = [];
  var r = Math.ceil(Math.random()*4);
  var loc = location.href.split('#');
  if(loc.length === 2){
    history.back();
    // if(loc[1] === 'sidebar'){
    //   console.log(1);
    // }else if(loc[1] === 'searchbar'){
    //   console.log(2);
    // }
  }
  $('.masthead').css("backgroundImage",'url('+"/img/"+r+".jpg"+')');
  var sidebarOn = () => {
    hs.push('sidebar-on');
    overlay.show();
    sidebar.addClass('toggled');
    bisClosed = false;
  }
  var searchbarOn = () => {
    hs.push('searchbar-on');
    overlay.show();
    searchResult.show();
    searchbar.addClass('toggled');
    sisClosed = false;
  }
  window.onpopstate = (event) => {
    if (event.state == null) {
      var lastState = hs.pop();
      if (lastState == 'sidebar-on') {
        sidebar.removeClass('toggled');
        overlay.hide();
        bisClosed = true;
        
      } else if (lastState == 'searchbar-on') {
        searchResult.hide();
        overlay.hide();
        searchbar.removeClass('toggled');
        sisClosed = true;
      }
    } else {
      var state = event.state;
      if (state.page == 'sidebar-on') {
        sidebarOn();
      } else if (state.page == 'searchbar-on') {
        searchbarOn();
      }
    }
  }
  $('.sidebar-toggle').click(function () {
    if (bisClosed == true) {
      history.pushState({ page: 'sidebar-on' }, null, '#sidebar');
      sidebarOn();
    } else {
      history.back();
    }
  });
  $('.search-toggle').click(function (event) {
    event.preventDefault();
    if (sisClosed == true) {
      history.pushState({ page: 'searchbar-on' }, null, '#searchbar');
      searchbarOn();
    } else {
      history.back();
    }
  });

  overlay.click(function () {
    history.back();
    
  });
  function checkScroll() {
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
      $('.navbar').addClass("scrolled");
    } else {
      $('.navbar').removeClass("scrolled");
    }
  }

  if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function () {
      checkScroll();
    });
  }
  $('.sentence').on('click',()=>{
    $('body').animate({scrollTop: $('article').offset().top - $('.navbar').outerHeight()},500);

  });
  $( window ).scroll(function() {
    if($(document).scrollTop() > 608){
      $('.arrow-top').addClass('opacity');
      $('.index').addClass('fixed');
    }else{
      $('.arrow-top').removeClass('opacity');
      $('.index').removeClass('fixed');
    }
  });

  $('.arrow-top').on('click',()=>{
    $('body').animate({scrollTop: 0},500);

  });
});
