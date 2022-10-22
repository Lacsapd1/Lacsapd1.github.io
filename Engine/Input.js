import Vector2 from './Vector2.js'
let onKeyDownFunctions = [];
let onKeyUpFunctions   = [];
let onMouseDownFunctions = [];
let onMouseUpFunctions   = [];
let mouseX = 0, mouseY = 0;

class KeyboardInput {
    
    onKeyDown(key, callback){
        onKeyDownFunctions.push({key, callback})
    }
    
    onKeyUp(key, callback){
        onKeyUpFunctions.push({key, callback})
    }
}

document.addEventListener("keypress", (event) => {  
    onKeyDownFunctions.forEach((fn) => {
        if(fn.key == event.keyCode) fn.callback() 
    });
});

document.addEventListener("keyup", (event) => {
    onKeyDownFunctions.forEach((fn) => {
        if(fn.key == event.keyCode) fn.callback() 
    });
});

document.addEventListener("mousedown", (event) => {
    onMouseDownFunctions.forEach((fn) => {
        if(fn.button == event.buttons) fn.callback() 
    });
})

document.addEventListener("mouseup", (event) => {
    onMouseUpFunctions.forEach((fn) => {
        if(fn.button == event.buttons) fn.callback() 
    });
})

document.addEventListener("mousemove", (event) => {mouseX = event.clientX; mouseY = event.clientY});

let Keyboard = new KeyboardInput()

class MouseInput {
    getPosition(){
        return new Vector2(mouseX, mouseY)
    }
    
    onMouseDown(button, callback){
        onMouseDownFunctions.push({button, callback})
    }
    
    onMouseUp(button, callback){
        onMouseUpFunctions.push({button, callback})
    }
}

let Mouse = new MouseInput();

export default {Keyboard, Mouse}