$(document).ready(function(){

  var state = false;
  var scrollpos;
  $("#drw-btn, #close-btn, #drw-layer").click(function(){
    if(state == false) {
      scrollpos = $(window).scrollTop();
      $('body').addClass('fixed').css({'top': -scrollpos});
      // $("#drw-btn").addClass('open');
      state = true;
    } else {
      $('body').removeClass('fixed').css({'top': 0});
      window.scrollTo( 0 , scrollpos );
      // $("#drw-btn").removeClass('open');
      state = false;
    }
    $("body").toggleClass('no-scroll');
    $("#side-bar").toggleClass('slide-in');
    $("#drw-layer").toggleClass('cover');
  });

  $("#header-slide").vegas({
    delay: 6000,
    // transition: 'slideRight2',
    slides: [
        { src: "/images/top-page/vegas/top_slide_image_04.jpg" },
        { src: "/images/top-page/vegas/top_slide_img_04.jpg" },
    ]
  });

  // $("#about-slide").vegas({
  //   delay: 6000,
  //   slides: [
  //       { src: "/images/top-page/vegas/shinkyu.jpg" },
  //       { src: "/images/top-page/vegas/shinkyu2.jpg" }
  //   ]
  // });
  //
  // $("").vegas({
  //   transitionDuration: 5000,
  //   slides: [
  //       { src: "/images/top-page/vegas/rapama.jpg" },
  //       { src: "/images/top-page/vegas/hedgehog.jpg" }
  //   ]
  // });
});
