var
    $skillset = $(".skillset"),
    $circle = $(".circle");

$circle.mouseleave(function() {

    $skillset.typed({
        strings: ["<br>skill set:^30000", "I also<br>know PHP"],
        typeSpeed: 50,
        startDelay: 0,
        backSpeed: 50,
        showCursor: false
    });
});

$circle.mouseenter(function() {
    



    var item = this.id;
    var toPrint;

    switch (item) {
        case 'bootstrap':
            toPrint = ["Bootstrap", "time saver"];
            break;
        case 'sass':
            toPrint = ["Sass.", "I love<br>mixin it up", "with Sass.^3000", "sorry bad pun"];
            break;
        case 'gulp':
            toPrint = ["Gulp.", "who names these things?^8000", "is slurp<br> a thing?"];
            break;
        case 'css3':
            toPrint = ["CSS3", "these circles", "didn't make", "themselves^9000", "(they're CSS)"];
            break;
        case 'angular':
            toPrint = ["angular's...", "awesome!"];
            break;
        case 'jq':
            toPrint = ["jquery", "using it right now"];
            break;
        case 'html5':
            toPrint = ["html5", "still number 1"];
            break;
        case 'wordpress':
            toPrint = ["wordpress", "so useful"];
            break;
    }
    $skillset.typed({
        strings: toPrint,
        typeSpeed: 50,
        startDelay: 0,
        backSpeed: 50,
        showCursor: false
    });
});



function makeText(title, text){
    toPrint = [title, text];
}
