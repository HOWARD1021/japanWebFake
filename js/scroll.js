function t() {
    var t = document.querySelector(".js-st-fixed-content")
      , e = window.innerHeight
      , r = t.offsetHeight
      , i = e / 2 - r / 2;
    
    console.log("inner:",e);
    console.log("centerPos:", i);
    console.log("offsetHeight:",r);
    t.style.setProperty("top", i + "px");
    /*var n = document.querySelector(".js-st-fixed-contentMarkerEnd")
      , s = r - document.querySelector(".js-st-fixed-contentMarkerEnd .js-st-fixed-contentMarkerInner").clientHeight + 18;
    n.style.setProperty("padding-bottom", s + "px"),
    setTimeout((function() {}
    ), 100)*/
    var sfc = document.querySelector("#js-st-img1")
    
    if(i > e/10 )
    {
        sfc.style.setProperty("background", "red");
        //sfc.style.setProperty("transform-origin", '50% 50%');
        sfc.style.setProperty("z-index", -1);
        sfc.style.setProperty("opacity", 1);
        sfc.style.setProperty("visibility", "hidden");
        //$(".st-fixed-contentItem").css({'style':'background:red'});
    }
}

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    t();
    //console.log("scroll:",scroll);
    // Do something
});