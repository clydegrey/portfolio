
  $('.parallax').scrolly({bgParallax: true});

//----------------------------------------------------------- //
// check window scroll postion                                //
//------------------------------------------------------------//
   $(window).scroll(function() {
//----------------------------------------------------------- //
// opacity and auto animate flipping letters in ABOUT section //
//------------------------------------------------------------//

   if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $(".bio").css('opacity','1');
      setTimeout(function(){
       $(".flip").addClass('fliptored');
       // $("footer").show();
    }, 1400); 
   }

//-------------------------------------------- //
//   on tablet or mobile                      //
//------------------------------------------ //

if ($(window).width() <= 825) {  
        //hide the mobile menu if user forget to close it
        if ($('.skills').isOnScreen(.1, .1)){
            console.log('works-wrapper');
            $(".burger").removeClass("on");
            $(".links").hide();
        }
}




//----------------------------------------------------------- //
// flip RED LETTERS back on scroll up 300px                   //       //
//------------------------------------------------------------//

   if($(window).scrollTop() + $(window).height() < $(document).height() - 300) {
       $(".flip").removeClass('fliptored');
   }

//----------------------------------------------------------- //
// fade out BIO section on scroll up 600px                    //        //
//------------------------------------------------------------// 

        if($(window).scrollTop() + $(window).height() < $(document).height() - 600) {
   $(".bio").css('opacity','0');
    }

  });  // END WINDOW SCROLL FUNCTION

//----------------------------------------------------------- //
// ANIMATE HEADER set classes and adjust CSS                  //        //
//------------------------------------------------------------// 

var $clydeCodes = $("h1"),
    $subtitle = $('.subtitle'),
    $header = $("header");

$clydeCodes.css('opacity', '0');
    setTimeout(function() {
        $clydeCodes.css('opacity',1).addClass('webdevsubtitle');
    }, 800);
    setTimeout(function() {
        $header.addClass('sticky').fadeIn(1000);
        $subtitle.css('color', '#fff');
    }, 5000);

//--------------------------------------------------------------------------------- //
//  BURGER -click on, move page, prevent overlap and conflict with scroll collapse  //
//---------------------------------------------------------------------------------// 

        $burger = $(".burger");
        $links = $(".links");
        $allinks=$(".allinks");

        $burger.click(function() {
            $("html, body").animate({ scrollTop: 0 }, 200);
            setTimeout(function(){
                $burger.toggleClass('on');
                $links.slideToggle(1);
             }, 201);
        });

        $(window).resize(function() {
            if ($(this).width() > 825) {
                $burger.hide().removeClass('on');
                $allinks.show();
                $links.show();
            } else {
                $burger.show();
                $links.hide();
               
            }
        });

$.fn.isOnScreen = function(x, y){
    
    if(x == null || typeof x == 'undefined') x = 1;
    if(y == null || typeof y == 'undefined') y = 1;
    
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var height = this.outerHeight();
    var width = this.outerWidth();
 
    if(!width || !height){
        return false;
    }
    
    var bounds = this.offset();
    bounds.right = bounds.left + width;
    bounds.bottom = bounds.top + height;
    
    var visible = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
    if(!visible){
        return false;   
    }
    
    var deltas = {
        top : Math.min( 1, ( bounds.bottom - viewport.top ) / height),
        bottom : Math.min(1, ( viewport.bottom - bounds.top ) / height),
        left : Math.min(1, ( bounds.right - viewport.left ) / width),
        right : Math.min(1, ( viewport.right - bounds.left ) / width)
    };
    
    return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;
    
};

$('a').on('click', function(event) {

    if (this.hash !== "") {  
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });


















