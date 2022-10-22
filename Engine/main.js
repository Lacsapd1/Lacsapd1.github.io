import RendererEngine from './render.js'
import GameObject     from './GameObject.js'
import Vector2        from './Vector2.js'
import Tilemap        from './Tilemap.js'
import Input     from './Input.js'

import Test from '../test.js'

let screenwidth  = window.innerWidth;                  //width of the entire screen
let screenheight = window.innerHeight;                 //height of the entire screen
let display      = document.getElementById("display"); //main display
let delta        = 0; //in ms

// const Renderer = new RendererEngine(screenwidth, screenheight, display) 

// window.onresize = () => {
//     Renderer.resize(window.innerWidth, window.innerHeight);
//     Renderer.render();
// }

// let test = new Test(new Vector2(0, 0), new Vector2(0, 0))
// Renderer.add(test)

function Update()
{
    let _start = new Date();
    Renderer.render()
    delta = new Date() - _start;
}

class ID {
    constructor(){
        let template = "PXXX-2XXX-DXXX-EXXX-IXXX-DXXX"
        template = template.replace("X", () => {return (Math.random() * 16).toString(16)[0]})
        
        Object.defineProperties(this, "id", {
            value: template,
            writable: false
        })
    }
    
    verify(ID){
        return (ID[0] == "P" && ID[5] == "2" && ID[10] == "D" && ID[15] == "E" && ID[20] == "I" && ID[25] == "D")
    }
}

export default {Vector2, GameObject, Update, Tilemap, ID, Input}