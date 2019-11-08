$(document).ready(function() {
    
    /* STICKY NAVIGATION */
    
    /* <section class="section-features"> - WE COULD use class name used by CSS but we don't want to mix JQuery and CSS, we give a different class name */
    
    /*
    var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of window') 
    }, {
    offset: '25%'
    })
    */
    
    $(".js--section-features").waypoint(function(direction) {
        if (direction == "down") {
            $("nav").addClass("sticky"); 
        } else {
            $("nav").removeClass("sticky");
        } 
    },{
            offset: "65px"
        });
    
    
    /* SCROLL ON BUTTONS 
        first we need to give classes to buttons, so we can select them
    How it works: we select "js--scroll-to-plan" class, when we click this happens: the animation scrolls to the top of "section-plan" section in 1 sec.
    */
    $(".js--scroll-to-plan").click(function() {
        $("html, body").animate({scrollTop: $(".js--section-plan").offset().top}, 1000)
    });
    
    $(".js--scroll-to-start").click(function() {
        $("html, body").animate({scrollTop: $(".js--section-features").offset().top}, 1000)
    });
    
    
    // NAVIGATION SCROLL
/* MY CODE: repeated code from above buttons, works fine
    $(".js--food-delivery").click(function() {
        $("html, body").animate({scrollTop: $(".js--section-features").offset().top}, 1000)
    });
*/
// JONAS CODE from https://css-tricks.com/snippets/jquery/smooth-scrolling/:
    $(function(){
        $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
               }
            }
        });    
    })
    
// ANIMATIONS ON SCROLL - animate.css
// ADDING CLASSES TO THE ELEMENTS WE WANT TO ADD ANIMATION TO: js--wp-1 - first waypoint animation
// CSS - need to change OPACITY and ANIMATION-DURATION
    $(".js--wp-1").waypoint(function(direction) {
        $(".js--wp-1").addClass("animated fadeIn");
    }, {
     offset: "50%"   
    });
    
    
    $(".js--wp-2").waypoint(function(direction) {
        $(".js--wp-2").addClass("animated fadeInUp");
    }, {
       offset: "50%" 
    });
    
    $(".js--wp-3").waypoint(function(direction) {
        $(".js--wp-3").addClass("animated fadeIn");
    }, {
        offset: "50%" 
    });
    
    $(".js--wp-4").waypoint(function(direction) {
        $(".js--wp-4").addClass("animated shake");
    },{
        offset: "50%"
    })
    
// MOBILE NAVIGATION main-nav MENU activated when burger-nav icon clicked
    $(".js--nav-icon").click(function() {
        var nav = $(".js--main-nav"); // CAN use var instead of $(".js--main-nav")
// We could use regular JQUERY syntax: $(".js--main-nav").nav.css("display", "block");, but instead...
        nav.slideToggle(200)

// NOW changing burgerBar into "X"; we need to change class for <i>
        var icon = $(".js--nav-icon i");

        if (icon.hasClass("ion-navicon-round")) {
            icon.addClass("ion-close-round");
            icon.removeClass("ion-navicon-round");
        } else {
            icon.addClass("ion-navicon-round");
            icon.removeClass("ion-close-round")
        }
        
//The hasClass() method checks if any of the selected elements have a specified class name: $(selector).hasClass(classname)
    })
})