$(function(){
  // $("#header-slide").vegas({
  //   delay: 6000,
  //   transition: 'slideRight2',
  //   slides: [
  //       { src: "/images/top-page/vegas/siberian.jpg" },
  //       { src: "/images/top-page/vegas/cat.jpg" }
  //   ]
  // });

  $("#about-slide").vegas({
    delay: 6000,
    slides: [
        { src: "/images/top-page/vegas/shinkyu.jpg" },
        { src: "/images/top-page/vegas/shinkyu2.jpg" }
    ]
  });

  $("").vegas({
    transitionDuration: 5000,
    slides: [
        { src: "/images/top-page/vegas/rapama.jpg" },
        { src: "/images/top-page/vegas/hedgehog.jpg" }
    ]
  });
});
