let rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details) {
    let rectlocation = rect.getBoundingClientRect()
    const insiderectvalue = details.clientX - rectlocation.left

    if (insiderectvalue < rectlocation.width / 2) {
        let redcolor = gsap.utils.mapRange(
            0, rectlocation.width / 2,
            255,
            0,
            insiderectvalue
        )
        gsap.to(rect, {
            backgroundcolor: `rgb(${redcolor},0,0)`,
            // ease: power4
        });


    }
    else {
        let bluecolor = gsap.utils.mapRange(
            rectlocation.width / 2,
            rectlocation.width,
            0,
            255,
            insiderectvalue
        );
        gsap.to(rect, {
            backgroundcolor: `rgb(0,0,${bluecolor},)`,
            // ease: power4,
        })
    }
})
rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundcolor: "white",
        // ease: power4,
    })

})