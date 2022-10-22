export default class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    add(Vector){
        this.x += Vector.x;
        this.y += Vector.y;
    }
    
    sub(Vector){
        this.x -= Vector.x;
        this.y -= Vector.y;
    }
    
    mult(Vector){
        this.x *= Vector.x;
        this.y *= Vector.y;
    }
    
    div(Vector){
        this.x /= Vector.x;
        this.y /= Vector.y;
    }
    
    mag (){
        return Math.sqrt((this.x * this.x) + (this.y * this.y))
    }
    
    normalize(){
        let length = Math.sqrt((this.x * this.x) + (this.y * this.y));
        this.x /= length;
        this.y /= length;
    }
    
    dot (Vector1, Vector2){
         return (Vector1.x * Vector2.x) + (Vector1.y * Vector2.y)
    }
    
    Lerp (Vector1, Vector2, factor){
        return new Vector2((1 - factor) * Vector1.x + factor * Vector2.x, (1 - factor) * Vector1.y + factor * Vector2.y);
    }
}