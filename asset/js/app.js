(function () {
    const sections = gsap.utils.toArray('.section');
    const timeline = gsap.timeline();
    // timeline
    //     .from(sections[0], {
    //         y: `${sections[0].offsetHeight}px`,
    //         opacity: 0
    //     })
    //     .from(sections[1], {
    //         y: `${sections[1].offsetHeight}px`,
    //         opacity: 0
    //     })
    //     .from(sections[2], {
    //         y: `${sections[2].offsetHeight}px`,
    //         opacity: 0
    //     })
    //     .from(sections[3], {
    //         y: `${sections[3].offsetHeight}px`,
    //         opacity: 0
    //     })
    //     .from(sections[4], {
    //         y: `${sections[4].offsetHeight}px`,
    //         opacity: 0
    //     })
    //     .from(sections[5], {
    //         y: `${sections[5].offsetHeight}px`,
    //         opacity: 0
    //     })
    //     .from(sections[6], {
    //         y: `${sections[6].offsetHeight}px`,
    //         opacity: 0
    //     })

    // gsap.registerPlugin(ScrollTrigger);

    // sections.forEach((section) => {
    //     ScrollTrigger.create({
    //         trigger: section,
    //         start: 'top bottom', // Animation starts when the top of the section reaches the bottom of the viewport
    //         end: 'bottom top', // Animation ends when the bottom of the section reaches the top of the viewport
    //         animation: timeline,
    //         scrub: true, // Smoothing effect during scrolling
    //         markers: false, // Optional: Display markers for debugging
    //     });
    // });
})()

(function () {
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    })
})()