interface IGraph {
    width: string;
    height: string;

    onClick(): void;
    onMouseOver(): void;
    onChange(): void;

    setWidth(width: string): void;
    setHeight(height: string):  void;
}

abstract class AGraph implements IGraph {
    width: string;
    height: string;
    abstract location: string;

    constructor(width: string, height: string) {
        this.width = width;
        this.height = height;
    }

    setWidth(width: string): void{
        this.width = width;
    }
    setHeight(height: string):  void{
        this.height = height;
    }

    abstract setLocation(): void;


    onClick(): void {
        //Leave to derived class to override
    }

    onMouseOver(): void {
        //Leave to derived class to override
    }

    onChange(): void {
        //Leave to derived class to override
    }

}


//Button I only need onClick 
class Button extends AGraph {
    location: string = 'hi';
   
    //override here
    onClick(): void {
        //this one
    }

    setLocation(): void {
        
    }

}

abstract class Textarea extends AGraph {
   
    onChange(): void {
        //need this one
    }

}