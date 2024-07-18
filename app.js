gsap.from('nav', {
    y:'-10vh',
    ease:'power1.inOut',
    duration: 1,
})
let tl = gsap.timeline();
tl
.to('main', {
    y:'100vh',
    scale:0.4,
    delay:0,
    duration:0,
})
.to('main', {
    y:'-180vh',
    scale:0.4,
    ease:'power1.inOut',
    duration:1.5,
})
.to('main', {
    y:'0vh',
    scale:1,
    ease:'power1.inOut',
    duration:1,
})
.from('.img1', {
    opacity:0,
    scale:0.3,
    ease:'power1.inOut',
    delay:-.4,
    duration:1,
})
.from('.img2', {
    opacity:0,
    scale:0.3,
    ease:'power1.inOut',
    duration:1,
    delay:-.8,
})
.from('.img3', {
    opacity:0,
    scale:0.3,
    ease:'power1.inOut',
    delay:-.8,
    duration:1,
})
.from('.text-1', {
    opacity:0,
    scale:0.3,
    ease:'power1.inOut',
    delay:-.8,
    duration:1,
})
.from('.text-2', {
    opacity:0,
    scale:0.3,
    ease:'power1.inOut',
    delay:-.8,
    duration:1,
})
.from('.cons-text', {
    opacity:0,
    y:'20vh',
    ease:'power1.inOut',
    delay:-.8,
    duration:1,
})
// -------------------------------scroll---------------------------
function page2(){
    gsap.from('.page-2 h2', {
        scrollTrigger:{
            trigger: ".hero",
            start:'-500% center',
            end:'-430% center',
            // markers:true,
            scrub:1,
        },   
        opacity:0,
        ease:'power1.inOut',
        duration:1,
    });
    gsap.from('.page-2 h1', {
        scrollTrigger:{
            trigger: ".hero",
            start:'-500% center',
            end:'-430% center',
            // markers:true,
            scrub:1,
        },   
        opacity:0,
        ease:'power1.inOut',
        duration:1,
    })
    gsap.from('.page-2 p', {
        scrollTrigger:{
            trigger: ".hero",
            start:'-420% center',
            end:'-350% center',
            // markers:true,
            scrub:1,
        },   
        opacity:0,
        ease:'power1.inOut',
        duration:1,
    })
}
ScrollTrigger.matchMedia({
    "(min-width: 741px)": function() {
        page2();
    },
    "(max-width: 740px)": function() {
    }
});

gsap.from('.page-3-main', {
    scrollTrigger:{
        trigger: ".hero",
        start:'-320% center',
        end:'-250% center',
        // markers:true,
        scrub:1,
    },   
    opacity:0,
    ease:'power1.inOut',
    duration:1,
});
