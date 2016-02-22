/**
 * Created by Atanas on 21.02.2016.
 */


window.onload = function(){


    var windowHeight = $(window).height();

    var welcomeImage = document.getElementById("welcomeContent");

    var setWelcomeHeight = windowHeight.toString() + "px";
    welcomeImage.style.height = setWelcomeHeight;

    var panelOne = document.getElementById("educationPanelOne");
    var panelTwo = document.getElementById("educationPanelTwo");

    var height = panelOne.offsetHeight;
    var h = height.toString() + "px";
    panelTwo.style.height = h;


    var panels = ["#skills", "#projectsRowTwo", "#projectsRowOne"];

    for (var i =0; i<panels.length; i++){
        alignPanels(panels[i]);
    };



};

var alignPanels = function(id){
    var panels = $(id).children();

    var max = 0;
    var panelDivs = [];

    for (var i=0; i<panels.length; i++){

        panelDivs.push($(panels[i]).children());
        var curr = $(panels[i]).children().height();
        if (max < curr)
            max = curr;
    };

    for (var i=0; i<panels.length; i++){

        $(panels[i]).children().height(max);
    };
};


$(window).resize(function(){
    var windowHeight = $(window).height();

    var welcomeImage = document.getElementById("welcomeContent");

    var setWelcomeHeight = windowHeight.toString() + "px";
    welcomeImage.style.height = setWelcomeHeight;
});

$(window).scroll( function(){

    /* Check the location of each desired element */
    $('.hideme').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window >= bottom_of_object ){

            $(this).animate({'opacity':'1'},700);

        }

    });

});