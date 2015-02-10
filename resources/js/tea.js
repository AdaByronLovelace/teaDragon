$(document).ready( function() {
    var $sub = $(".sub-menu");
    
    $(".sub-home").show();
    $("#home").show();

    $(".nav-item").click(function() {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
        //hide sections and sub menus
        $("main section").hide();
        $(".content").hide();
        $(".sub").hide(200);
        if ($(this).attr("id") == "nav-home") {
            $sub.animate({left: 116}, 200);
            $(".sub-home").show(200);
            $("#home").show();
        } else if ($(this).attr("id") == "nav-cal") {
            $sub.animate({left: 306}, 200);
            $(".sub-cals").show(200);
            $("#cal").show();
        } else if ($(this).attr("id") == "nav-world") {
            $sub.animate({left: 686}, 200);
            $(".sub-wrld").show(200);
            $("#world-map").show();
        } else if ($(this).attr("id") == "nav-sharn") {
            $sub.animate({left: 876}, 200);
            $(".sub-shar").show(200);
            $("#sharn-map").show();
        } else if ($(this).attr("id") == "nav-char") {
            $sub.animate({left: 496}, 200);
            $(".sub-char").show(200);
            $("#characters").show();
        } else if ($(this).attr("id") == "nav-gld") {
            $sub.animate({left: 1066}, 200);
            $(".sub-gld").show(200);
            $("#guild").show();
        }
    });
    
    $(".sub-shar a").click(function(e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: ($(this.attributes.href.value).offset().top)
        }, 1000);
    });

});

