
  
(function($) {
  "use strict";



  // owlCarousel
  $(".pg_img_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    smartSpeed: 800,
    nav: false,
    dots: true
  });

  // owlCarousel
  $(".contact_img").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    smartSpeed: 800,
    nav: true,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>'
    ],
    dots: true
  });

  // pick_style mobile slider
  $(function() {
    var owl = $('.pick_style_wrp'),
        owlOptions = {
            items: 1,
            loop: false,
            center: true,
            margin: 10,
            URLhashListener: true,
            autoplayHoverPause: true,
            startPosition: 'URLHash',
            smartSpeed: 750,
            
        };

    if ( $(window).width() < 768 ) {
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function() {
        if ( $(window).width() < 768 ) {
            if ( $('.owl-carousel').hasClass('off') ) {
                var owlActive = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.owl-carousel').hasClass('off') ) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });
});


//pick_style img checked
var psBtn = document.querySelectorAll(".pick_style_sm_img a")

psBtn.forEach(psBtns => {
  psBtns.addEventListener("click", () => {
    psBtnRemove()
    psBtns.classList.add('active')
  })
})

function psBtnRemove() {
  psBtn.forEach(psBtns => {
    psBtns.classList.remove('active')
  })
}

// font Style Button
var fbw = document.querySelectorAll(".font_btn_wrp button")

fbw.forEach(fbws => {
  fbws.addEventListener("click", () => {
    fbwRemove()
    fbws.classList.add('active')
  })
})

function fbwRemove() {
  fbw.forEach(fbws => {
    fbws.classList.remove('active')
  })
}


$(".check_box").click(function() {
  $(".check_box i").toggleClass("active")
})
$(".terms_box i").click(function() {
  $(this).toggleClass("active")
})



// contry code demo  https://codepen.io/abhishek/pen/DgNRLe
function setCountry(code){
  if(code || code==''){
      var text = jQuery('a[cunt_code="'+code+'"]').html();
      $(".dropdown dt a span").html(text);
  }
}
$(document).ready(function() {
  $(".dropdown img.flag").addClass("flagvisibility");

  $(".dropdown dt a").click(function() {
      $(".dropdown dd ul").toggle();
  });

  $(".dropdown dd ul li a").click(function() {
      //console.log($(this).html())
      var text = $(this).html();
      $(".dropdown dt a span").html(text);
      $(".dropdown dd ul").hide();
      $("#result").html("Selected value is: " + getSelectedValue("country-select"));
  });

  function getSelectedValue(id) {
      //console.log(id,$("#" + id).find("dt a span.value").html())
      return $("#" + id).find("dt a span.value").html();
  }

  $(document).bind('click', function(e) {
      var $clicked = $(e.target);
      if (! $clicked.parents().hasClass("dropdown"))
          $(".dropdown dd ul").hide();
  });


  $("#flagSwitcher").click(function() {
      $(".dropdown img.flag").toggleClass("flagvisibility");
  });
});


})(jQuery);

