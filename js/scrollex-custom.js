var $portfolio = $('.portfolio'),
    $box = $('.caption-style-4 li'),
    $box1 = $('.caption-style-4 li:nth-of-type(1)'),
    $box2 = $('.caption-style-4 li:nth-of-type(2)'),
    $box3 = $('.caption-style-4 li:nth-of-type(3)'),
    $box4 = $('.caption-style-4 li:nth-of-type(4)'),
    $skills = $('.skills');

$portfolio.scrollex({
    mode: 'middle',
    initialize: function() {
        $box.addClass('separate');
    },
    enter: function() {
        $box.removeClass('separate');
    },
    leave: function() {
        $box.addClass('separate');
    },
    scroll: function(progress) {
        //----------------------------------------------------------- //
        // Stagger Projects Slide initialize                          //   
        //------------------------------------------------------------//   
        if (progress <= .5) {
            $box1.css('transition', 'all 1s');
            $box2.css('transition', 'all 1s');
            $box3.css('transition', 'all 1.8s');
            $box4.css('transition', 'all 1.8s');
        }

        if (progress > .5) {
            $box1.css('transition', 'all 1.8s');
            $box2.css('transition', 'all 1.8s');
            $box3.css('transition', 'all 1s');
            $box4.css('transition', 'all 1s');
        }

    }

});




$skills.scrollex({
    mode: 'middle',
    initialize: function() {},
    enter: function() {},
    leave: function() {},
    scroll: function(progress) {

        var $this = $(this),
            $container = $this.find('.container'),
            $circle = $this.find('.circle'),
            $devicon = $this.find('.devicon:odd'),
            $devicon2 = $this.find('.devicon:even'),
            $p = $this.find('p'),
            $next = $this.find('.next'),
            x,

            y;

        if (progress > 0.5)
            x = 1.7 - progress;
        else
            x = progress;

        x = Math.max(0, Math.min(1, x * 2));

        $circle.css('opacity', x);

        ///----------------------------------------------------------- //
        // ROTATE DEVICONS                                            //   
        //------------------------------------------------------------// 
        x = (progress - 0.5) * 301;
        y = (x) * -(-1.3);

        $devicon
            .css('-moz-transform', 'rotateY(' + y + 'deg)')
            .css('-webkit-transform', 'rotateY(' + y + 'deg)')
            .css('-o-transform', 'rotateY(' + y + 'deg)')
            .css('-ms-transform', 'rotateY(' + y + 'deg)')
            .css('transform', 'rotateY(' + y + 'deg)');
        $devicon2
            .css('-moz-transform', 'rotateX(' + x + 'deg)')
            .css('-webkit-transform', 'rotateX(' + x + 'deg)')
            .css('-o-transform', 'rotateX(' + x + 'deg)')
            .css('-ms-transform', 'rotateX(' + x + 'deg)')
            .css('transform', 'rotateX(' + x + 'deg)');




        if (progress > 0.5)
            x = 1 - progress;
        else
            x = progress;

        x = Math.max(0, Math.min(1, x * 2));

        $p.css('opacity', x);



    }

});
