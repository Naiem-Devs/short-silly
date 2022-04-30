wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
    }
  )
  wow.init();
  
  var bounce = document.querySelectorAll(".pick_style_wrp a")
  
  bounce.forEach(bounces => {
      bounces.addEventListener("click", () => {
          bounceRemove()
          bounces.classList.add("bounce")
      })
  })
  
  function bounceRemove() {
      bounce.forEach(bounces => {
          bounces.classList.remove("bounce")
      })
  }