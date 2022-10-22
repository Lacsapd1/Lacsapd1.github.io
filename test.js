import GameObject from './Engine/GameObject.js'
export default class Test extends GameObject {
    show(ctx){
        ctx.fillStyle = '#FFFFFF'
        ctx.fillRect(window.innerWidth / 2 - 50, window.innerHeight / 2 - 50, 100, 100);
    }
}