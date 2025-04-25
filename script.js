var crsr =  document.querySelector("#cursor")
//crsr.style.transition = "all ease 0.3s";
var crsrb =  document.querySelector("#cursor-b")
//crsrb.style.transition = "all ease 0.3s";

document.addEventListener("mousemove", function (dets){
    crsr.style.left = dets.x+30+ "px"
    crsr.style.top = dets.y+"px"
    crsrb.style.left = dets.x - 150 + "px"
    crsrb.style.top = dets.y - 150 + "px"
})


var h4all = document.querySelectorAll("#nav h4, #footer h3, #footer #f1");

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    }); 

    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #96c11E"; 
        crsr.style.backgroundColor = "#96c11E";
    }); 
});










gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: "0.5",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,

    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
      
    }
})

gsap.from( "#about-us img, #about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    stagger: 0.1,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end:"top 55%",
        scrub: 2

    }

} )


gsap.from( "#cards-container",{
    scale: 0.8,
    opacity:0,
    duration:1,
    stagger: 0.1,
    scrollTrigger:{
        trigger: "#cards-container",
        scroller: "body",
        start: "top 70%",
        end:"top 65%",
        scrub: 1

    }

} )

gsap.from("#col1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger: "#col1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#col2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger: "#col1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})


gsap.from("#page4 h4",{
    y:70,
    scrollTrigger:{
        trigger: "#page4 h4",
        scroller: "body",
        start: "top 90%",
        end: "top 70%",
        scrub: 3
    }
})
