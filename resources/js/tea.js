$(document).ready( function() {
    var $sub = $(".sub-menu");
    var scrolled = 0;
    
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 0){
            scrolled = 1;
            $("#dragon").addClass("tea");
        }
        else {
            scrolled = 0;
            $("#dragon").removeClass("tea");
        }
    });
    
    $(".sub-home").show();
    $("#home").show();

    $(".nav-item").click(function() {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
        //hide sections and sub menus
        $("main section").hide();
        $(".content").hide();        
        if ($(this).attr("id") == "nav-home") {
            $("#home").show();
        } else if ($(this).attr("id") == "nav-cal") {
            $("#cal").show();
        } else if ($(this).attr("id") == "nav-world") {
            $("#world-map").show();
        } else if ($(this).attr("id") == "nav-sharn") {
            $("#sharn-map").show();
        } else if ($(this).attr("id") == "nav-char") {
            $("#characters").show();
        } else if ($(this).attr("id") == "nav-gld") {
            $("#guild").show();
        }
        if ($(window).width() < 860) {
            jQuery('.toggle-nav').toggleClass('active');
            jQuery('.menu ul').toggleClass('active');
        }
    });
    
    /* jump tag scroll */
    $(".sub-menu a").click(function(e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: ($(this.attributes.href.value).offset().top - 80)
        }, 1000);
    });
    
    /* accordion */
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
 
    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });
    
    /* sub-menu */
    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.menu ul').toggleClass('active');
 
        e.preventDefault();
    });
});

