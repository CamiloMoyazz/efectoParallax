
//TODOS LOS EFECTOS SE SECAN DE LA LIBRERIA DE GSAP

//CREAMOS 2 VARIABLES 
//controller para el control del Scroll
//timeline para la linea de tiempo de los efectos

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

// luego utilizando timeline llamamo al metodo to que 
//recibe ("LaClase", duracionEnSegundos, {lo que quieres cambiar} , 'ejecutarlo al mismo tiempo')

timeline
    .to(".rockD", 3, {y: -600})
    .to(".rockI", 3, {y: -400}, '-=3')
    .fromTo(".bg",{y: -50},{ y: 0 , duration: 3}, '-=3')
    .to(".content", 3, {top:'0%'}, '-=3')
    .fromTo(".content-img", {opacity:0.5}, {opacity:1 , duration: 3});

//Aqui creamos una escena para realizar las animaciones de manera suave

let scene = new ScrollMagic.Scene({

        triggerElement: "section",
        duration: "200%",
        triggerHook: 0,
})
//llamamos a estos metodos que se van a ejecutar al momento de rollear el mouse
    .setTween(timeline)
    .setPin("section")
    .addTo(controller);