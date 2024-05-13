//complete this code
class Rectangle {
	constructor(width,height){
        this._width = width;
        this._height = height;
    }

    get width(){
        return this._width;
    }

    get height(){
        if(this._height!=null)
            return this._height;
        else
            return this._width;
    }

    getArea(){
        if(this._height!=null)
            return (this._width * this._height);
        else
            return (this._width * this._width);
    }
}

class Square extends Rectangle {
	constructor(side){
        super(side);
    }

    getPerimeter(){
        return 4*this._width;
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
