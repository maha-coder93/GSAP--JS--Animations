gsap.from('.header', {
    duration: 2,
    y: '-100%',
    ease: "bounce"
})

gsap.from('.links', {
    duration: 1.5,
    delay: 2,
    opacity: '0',
    stagger: 1
})

gsap.from('.sidebar', {
    duration: 2.5,
    delay: 3.5,
    x: '-100%',
    opacity: 0,
    ease: "slow(0.7, 0.7, false)"
})

gsap.from('.footer', {
    duration: 2,
    delay: 6,
    x: '-100%',
    ease: "elastic"
})

gsap.from('.reverse', {
    duration: 2,
    delay: 8,
    opacity: 0,
    scale: 0,
    rotation: 720,
    ease: "elastic"
})