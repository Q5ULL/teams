$(function() {

  var $window           = $(window),
      win_height_padded = $window.height() * 1.1;
      // isTouch           = Modernizr.touch;

  // if (isTouch) { $('.person-1').addClass('.person-1_animate'); }

  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop();
    //measure how far from the top you have scrolled
    var win_height_padded = $window.height() * 1.1;
    //add some padding

    // Showed...
    $(".layer-1:not(.person-1_animate)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + (win_height_padded*.25) > offsetTop) {
        //win_height_padded = window height multiplied by 3/4 of space
        if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animateTree ' + $this.data('animation'));
          }, parseInt($this.data('timeout'),10));
        } else {
          
          //add animation
          $this.addClass('animateTree ' + $this.data('animation'));
          
          // push to center
          $(".person-1").animate({
                left: $(window).width() / 2,
                easing: 'easeOutCubic'
              }, 2000);
        }
      }
    });
    // Hidden...
   $(".layer-1").each(function (index) {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animateTree')
      }
    });
  }

  revealOnScroll();
});
