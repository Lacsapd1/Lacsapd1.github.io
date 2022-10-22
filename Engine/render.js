export default class Render {
    constructor(width, height, canvas){
        this.width         = width;
        this.height        = height;
        this.canvas        = canvas || document.createElement("canvas");
        this.ctx           = this.canvas.getContext("2d");
        
        this.scene         = [];
        
        this.clearColor    = '#000000';
        this.defaultColor  = "#FFFFFF";
        
        this.canvas.width  = this.width;
        this.canvas.height = this.height;
    }
    
    add(GameObject){
        this.scene.push(GameObject);
        return this.scene.length - 1;
    }
    
    remove(id) {
        this.scene.filter((item) => item.id != id);
    }
    
    render(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = this.clearColor;
        this.ctx.fillRect(0,0, this.canvas.width, this.canvas.height);
        
        this.scene.forEach((object) => {
            try {
                object.show(this.ctx);
            } catch (e) {
                console.warn(e)
            }
        });
    }
    
    resize(width, height) {
        this.width         = width;
        this.height        = height;
        
        this.canvas.width  = this.width;
        this.canvas.height = this.height;
    }
}