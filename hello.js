 
 
// gsap.to("#box",{

//     x:900,
//     y:300,
//     borderRadius:"50%",
// duration:5,

// backgroundColor:"blue",
// scale:0.1,
// // rotate:360,
// // }) 
 
// gsap.from("#box",{

//     x:900,
//     y:300,
//     borderRadius:"50%",
// duration:5,

// backgroundColor:"blue",
// scale:0.1,
// rotate:360,
// })
// var tu=gsap.timeline();
// tu.to("h1",{
//     x:700,
// })
// tu.to("h2")






// var tu=gsap.timeline();


// tu.to("h1",{
//     x:600,

// })
// tu.to("h2",{
//     x:800,
    

// })
var tu=gsap.timeline();





tu.from("#nav img,#navpart2,#navpart3 h4,#navpart3 button",{
    y:-100,
    opacity:0,
    duration:1,
    stagger:0.2,
})
tu.from("#main h1",{
 y:200,
    opacity:0,
    stagger:0.2,
})
tu.from("#main #left,#kusu",{
    scale:0.5,
    opacity:0,
})























