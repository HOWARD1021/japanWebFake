function t() {
    var t = document.querySelector(".js-st-fixed-content")
      , e = window.innerHeight
      , r = t.offsetHeight
      , i = e / 2 - r / 2;
    
    console.log("inner:",e, ", centerPos:",i, "offsetHeight:",r);
    console.log();
    
    //t.style.setProperty("top", i + "px");
    /*var n = document.querySelector(".js-st-fixed-contentMarkerEnd")
      , s = r - document.querySelector(".js-st-fixed-contentMarkerEnd .js-st-fixed-contentMarkerInner").clientHeight + 18;
    n.style.setProperty("padding-bottom", s + "px"),
    setTimeout((function() {}
    ), 100)*/
    var jsi1 = document.querySelector("#js-st-img1"),
        jsi1Offset = document.querySelector(".serviceListScrollY1").offsetTop,
        jsi2 = document.querySelector("#js-st-img2"),
        jsi2Offset = document.querySelector(".serviceListScrollY2").offsetTop,
        jsi3 = document.querySelector("#js-st-img3"),
        jsi3Offset = document.querySelector(".serviceListScrollY3").offsetTop,

        space1_2 = (jsi2Offset - jsi1Offset) / 2,
        space2_3 = (jsi3Offset - jsi2Offset) / 2;


    console.log("scrollTop:", jsi2.scrollTop, "scrollY", scrollY);
    console.log("scrollY:",scrollY, "offset1:",jsi1Offset, " offset2:", jsi2Offset, "offset3:", jsi3Offset, "s12:",jsi2Offset - space1_2, "s23:", jsi3Offset - space2_3);
    console.log("-------------------")
    //<div id="js-st-img2" class="st-fixed-contentItem" style="transform-origin: 50% 50%; transform: translate(0px, 0px); z-index: -1; opacity: 1; visibility: inherit;">
    //<div id="js-st-img1" class="st-fixed-contentItem" style="transform-origin: 50% 50%; transform: translate(0px, 0px); z-index: 1; opacity: 0; visibility: hidden;">

    if( scrollY > jsi1Offset - (jsi1Offset/4) && scrollY < jsi2Offset - space1_2)
    {
        //sfc.style.setProperty("transform-origin", '50% 50%');
        console.log("scroll:", )
        jsi1.style.setProperty("z-index", 1);
        jsi1.style.setProperty("opacity", 1);
        jsi1.style.setProperty("visibility", "inherit");
        
    }
    else{
        jsi1.style.setProperty("z-index", -1);
        jsi1.style.setProperty("opacity", 0);
        jsi1.style.setProperty("visibility", "hidden");
    }

    if( scrollY > jsi2Offset - space1_2 && scrollY < jsi3Offset - space2_3)
    {
        jsi2.style.setProperty("z-index", 1);
        jsi2.style.setProperty("opacity", 1);
        jsi2.style.setProperty("visibility", "inherit");
    }
    else{
        jsi2.style.setProperty("z-index", -1);
        jsi2.style.setProperty("opacity", 0);
        jsi2.style.setProperty("visibility", "hidden");
    }

    if( scrollY > jsi3Offset - space1_2 && scrollY < jsi3Offset + jsi3.offsetHeight)
    {
        jsi3.style.setProperty("z-index", 1);
        jsi3.style.setProperty("opacity", 1);
        jsi3.style.setProperty("visibility", "inherit");
    }
    else{
        jsi3.style.setProperty("z-index", -1);
        jsi3.style.setProperty("opacity", 0);
        jsi3.style.setProperty("visibility", "hidden");
    }
    

    
}

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    t();
    //console.log("scroll:",scroll);
    // Do something
});