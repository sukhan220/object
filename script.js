import { change, goCar, stop, start, setModel } from "./code/index.js";



const car={
    model:1,
    speed:2,
    windowColor: "rgb(219, 188, 7)",
    bodyColor:"rgb(216, 79, 79)",
    frontLightColor:"white",
    frontLight:"on",
    backLightColor:"white",
    backLight:"on",
    frontWheelColor:"black",
    backWheelColor: "black",

    start:function(){
        start();


    },
    stop:function(){
        stop();

    },
    go:function(){
        goCar(this.speed);

    },

    build:function(){
        change(this);
        setModel(this.model);

    }

}






car.build();


