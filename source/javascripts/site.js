$(function(){
  $("#header-slide").vegas({
    delay: 6000,
    transition: 'slideRight2',
    slides: [
        { src: "/images/top-page/vegas/siberian.jpg" },
        { src: "/images/top-page/vegas/cat.jpg" }
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
