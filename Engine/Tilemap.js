export default class Tilemap {
    constructor(Image, width, height, canvas){
        this.Image = Image;
        this.canvas = canvas || document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d")
        this.ctx.canvas.width = width;
        this.ctx.canvas.height = height;
    }
    
    render(){
        console.log(this.Image)
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
        this.ctx.drawImage(this.Image, 0, 0);
    }
}