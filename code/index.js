const wheel=document.querySelectorAll(".car__wheel");
const car= document.querySelector(".car");
console.dir(car);


let root= document.documentElement;
let isStart=false;

const change=(c)=>{
    console.log(c);
    let bLOff="lightcoral";
    let fLOff="green";
    root.style.setProperty("--color-car-body",c.bodyColor);
    root.style.setProperty("--color-window",c.windowColor);
    root.style.setProperty("--car-wheel-front",c.frontWheel.tireColor);
    root.style.setProperty("--car-wheel-back",c.backWheel.tireColor);
    root.style.setProperty("--car-frontWheel-body",c.frontWheel.bodyColor);
    root.style.setProperty("--car-backWheel-body",c.backWheel.bodyColor);

   if(c.frontLight.switch ==="on"){
        console.log("front");
        root.style.setProperty("--color-front-light",c.frontLight.color);
   }
   if(c.backLight.switch ==="on"){
    console.log("back");
        root.style.setProperty("--color-back-light",c.backLight.color);
   }

}
const setModel=(model)=>{
    switch(model) {
        case 1:
          root.style.setProperty("--car-radius","5.5vmin");
          break;
        case 2:
            root.style.setProperty("--car-radius","20vmin");
          break;
        case 3:
            root.style.setProperty("--car-radius","1vmin");
          break;
        default:
           console.log("Model set");
           break;
      }


}

const goCar=(speed)=>{
    if(speed==0){
       
        speed=3.0;
        speed=3.0-speed;

    }
    else{
        speed=3.0-speed;

    }
    if(!isStart){
        return;
    }
    wheel.forEach(item=>{

        item.style.animation=`run ${speed}s 1s linear infinite`;
    });
}

const stop=()=>{
    wheel.forEach(item=>{
        item.style.animation=`run ${0}s 1s linear infinite`;
    });
    isStart=false

}
const start=()=>{
    isStart=true;
    car.style.animation=`start-car 2.5s 1.1s`;

}

export {goCar,change,stop,start,setModel};








