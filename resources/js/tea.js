$(document).ready( function() {
    $(".sub-home").show();
    $("#home").show();

    $(".nav-item").click(function() {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
        //hide sections and sub menus
        $("main section").hide();
        $(".content").hide();
        $(".sub").hide();
        if ($(this).attr("id") == "nav-home") {
            $(".sub-home").show();
            $("#home").show();
        } else if ($(this).attr("id") == "nav-cal") {
            $(".sub-cals").show();
            $("#cal").show();
        } else if ($(this).attr("id") == "nav-world") {
            $(".sub-wrld").show();
            $("#world-map").show();
        } else if ($(this).attr("id") == "nav-sharn") {
            $(".sub-shar").show();
            $("#sharn-map").show();
        } else if ($(this).attr("id") == "nav-char") {
            $(".sub-char").show();
            $("#characters").show();
        }
    });
    
    $(".sub-shar a").click(function(e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: ($(this.attributes.href.value).offset().top)
        }, 1000);
    });

});

