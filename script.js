
const Goanimation = {
    targets: '.beard',
    translate: '20vw',
    easing: 'linear',
    loop: 'true',
    delay: anime.stagger(100),
    translateX: '50vw', 
    translateY: '40px',
    duration: 1000,
    direction: 'alternate',
    easing: 'easeInOutQuad',
    loop: true,
}

anime(Goanimation)

const doAnimation = {
    targets: '.moustashe',
    translate: '20vw',
    easing: 'linear',
    loop: 'true',
    delay: anime.stagger(100),
    translateX: '20vw', 
    translateY: '180px',
    duration: 3000,
    direction: 'alternate',
    easing: 'easeOutElastic(1, .5)',
    loop: true,

}

anime(doAnimation)


const createanimation= {

    targets: '.hair',
    translate: '20vw',
    easing: 'linear',
    loop: 'true',
    delay: anime.stagger(100),
    translateX: '20vw', 
    translateY: '10px',
    duration: 2000,
    direction: 'alternate',
    easing: 'easeOutElastic(1, .5)',
    loop: true,
}

anime(createanimation)

const lefteyeanimation =  {
    targets: '.eye-left ',
    translate: '20vw',
    easing: 'linear',
    loop: 'true',
    delay: anime.stagger(100),
    translateY: '-30px',
    translateX: '-30px',
    duration: 2000,
    direction: 'alternate',
    easing: 'easeOutElastic(1, .5)',
    loop: true,

}

anime(lefteyeanimation)

const righteyeanimation = {
    targets: '.eye-right ',
    translate: '20vw',
    easing: 'linear',
    loop: 'true',
    delay: anime.stagger(100),
    translateX: 250,
    endDelay: 1000,
    direction: 'alternate',
    duration:'2500', 
    easing: 'easeOutElastic(1, .5)',
    loop: true,
    
}
anime(righteyeanimation)