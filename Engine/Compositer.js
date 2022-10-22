class Compositer {
    constructor(width, height, canvas){
        this.width = width;
        this.height = height;
        this.ctx = canvas.getContext("2d") || document.createElement("2d");
        this.Layers = [];
    }
    
    composit(){
        this.Layers.sort((a, b) => (a.zIndex - b.zIndex));
        
        
    }
    
    addLayer(Layer){
        this.Layers.push(Layer);
    }
    
    removeLayer(Layer){
        this.Layers = this.Layers.filter((item) => item != Layer);
    }
}

class Layer{
    constructor(zIndex, ctx){
        this.zIndex = zIndex;
        this.ctx = ctx;
    }
}