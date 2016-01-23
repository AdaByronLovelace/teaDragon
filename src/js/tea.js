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
    
    $(".nav li").click(function() {
        $(".nav li").removeClass("active");
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
    
    /* Card flip */
    $('.flip').on('click', function(){
        $(this).find('.card').toggleClass('flipped');
    });
    
    /* sub-menu */
    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.menu ul').toggleClass('active');
 
        e.preventDefault();
    });
    
    /* Image Zoom */
    $('#Dox img')
        .wrap('<span style="display:inline-block"></span>')
        .css('display', 'block')
        .parent()
        .zoom();
});