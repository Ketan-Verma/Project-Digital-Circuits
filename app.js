let selected = "none";
// wire,
//buffer,led,NOT,AND,OR,NAND,NOR,XOR,XNOR

function setup() {
    createCanvas(600, 400);
    background(220);
    console.log("hello")

    let buffer1 = new Buffer(100, 100)
    buffer1.show();
    let not1 =new NOT(100,150)
    not1.show()
    let and1 = new AND(100,200);
    and1.show();
    let nand1 = new NAND(100,250);
    nand1.show();
    let or1 = new OR(100,300);
    or1.show();
    let nor1 = new NOR(100,350);
    nor1.show();
    let xor1 = new XOR(200,100);
    xor1.show();
    let xnor1 = new XNOR(200,100);
    xnor1.show();

}

function draw() {}

class Buffer {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    show() {
        line(this.x, this.y, this.x + 15, this.y);
        line(this.x, this.y + 20, this.x + 15, this.y + 20);
        line(this.x + 50, this.y + 10,this.x + 65, this.y + 10);
        beginShape();
        vertex(this.x + 15, this.y-10);
        vertex(this.x + 15, this.y + 30);
        vertex(this.x + 50, this.y + 10);
        endShape(CLOSE);
        circle(this.x-5, this.y, 10);
        circle(this.x-5, this.y + 20, 10);
        circle(this.x + 70, this.y + 10, 10);
    }
}
class NOT {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    show() {
        line(this.x, this.y, this.x + 15, this.y);
        line(this.x, this.y + 20, this.x + 15, this.y + 20);
        line(this.x + 50, this.y + 10,this.x + 70, this.y + 10);
        beginShape();
        vertex(this.x + 15, this.y-10);
        vertex(this.x + 15, this.y + 30);
        vertex(this.x + 50, this.y + 10);
        endShape(CLOSE);
        circle(this.x-5, this.y, 10);
        circle(this.x-5, this.y + 20, 10);
        circle(this.x + 75, this.y + 10, 10);
        circle(this.x + 55, this.y + 10, 8);
    }
}
class AND{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    show() {
        line(this.x, this.y, this.x + 15, this.y);
        line(this.x, this.y + 20, this.x + 15, this.y + 20);
        line(this.x + 40, this.y + 10,this.x + 65, this.y + 10);
        // beginShape();
        // vertex(this.x + 15, this.y-10);
        // vertex(this.x + 15, this.y + 30);
        // vertex(this.x + 50, this.y + 10);
        // endShape(CLOSE);
        arc(this.x + 15, this.y + 10, 60, 40,-PI/2,PI/2,CHORD);
        circle(this.x-5, this.y, 10);
        circle(this.x-5, this.y + 20, 10);
        circle(this.x + 70, this.y + 10, 10);
    }
}
class NAND{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    show() {
        line(this.x, this.y, this.x + 15, this.y);
        line(this.x, this.y + 20, this.x + 15, this.y + 20);
        line(this.x + 50, this.y + 10,this.x + 65, this.y + 10);
        // beginShape();
        // vertex(this.x + 15, this.y-10);
        // vertex(this.x + 15, this.y + 30);
        // vertex(this.x + 50, this.y + 10);
        // endShape(CLOSE);
        arc(this.x + 15, this.y + 10, 60, 40,-PI/2,PI/2,CHORD);
        circle(this.x-5, this.y, 10);
        circle(this.x-5, this.y + 20, 10);
        circle(this.x + 70, this.y + 10, 10);
        circle(this.x + 50, this.y + 10, 8);
    }
}
class OR{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.mag = 5;
    }
    show() {
        line(this.x, this.y, this.x + 20, this.y);
        line(this.x, this.y + 20, this.x + 20, this.y + 20);
        line(this.x + 40, this.y + 10,this.x + 65, this.y + 10);
        beginShape();
        vertex(this.x + 40,this.y+10)//e
        vertex(this.x + 35,this.y+5 - this.mag)//d
        vertex(this.x + 30,this.y - this.mag)//c
        vertex(this.x + 20, this.y-5 - this.mag)//b3
        vertex(this.x + 15, this.y-5 - this.mag)//b
        vertex(this.x + 10, this.y-5 - this.mag)//b2
        vertex(this.x + 15, this.y - this.mag)//a
        vertex(this.x + 18,this.y+5 - this.mag)//center
        vertex(this.x + 20,this.y+10)//0
        vertex(this.x + 18,this.y+15+this.mag)//center
        vertex(this.x + 15, this.y + 20+this.mag)//a
        vertex(this.x + 10, this.y + 25+this.mag)//b2
        vertex(this.x + 15, this.y + 25+this.mag)//b
        vertex(this.x + 20, this.y + 25+this.mag)//b3
        vertex(this.x + 30,this.y+20+this.mag)//c
        vertex(this.x + 35,this.y+15+this.mag)//d
        vertex(this.x + 40,this.y+10)//e
        endShape();
        circle(this.x-5, this.y, 10);
        circle(this.x-5, this.y + 20, 10);
        circle(this.x + 70, this.y + 10, 10);
    }
}
class NOR{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.mag = 5;
    }
    show() {
        line(this.x, this.y, this.x + 20, this.y);
        line(this.x, this.y + 20, this.x + 20, this.y + 20);
        line(this.x + 40, this.y + 10,this.x + 65, this.y + 10);
        beginShape();
        vertex(this.x + 40,this.y+10)//e
        vertex(this.x + 35,this.y+5 - this.mag)//d
        vertex(this.x + 30,this.y - this.mag)//c
        vertex(this.x + 20, this.y-5 - this.mag)//b3
        vertex(this.x + 15, this.y-5 - this.mag)//b
        vertex(this.x + 10, this.y-5 - this.mag)//b2
        vertex(this.x + 15, this.y - this.mag)//a
        vertex(this.x + 18,this.y+5 - this.mag)//center
        vertex(this.x + 20,this.y+10)//0
        vertex(this.x + 18,this.y+15+this.mag)//center
        vertex(this.x + 15, this.y + 20+this.mag)//a
        vertex(this.x + 10, this.y + 25+this.mag)//b2
        vertex(this.x + 15, this.y + 25+this.mag)//b
        vertex(this.x + 20, this.y + 25+this.mag)//b3
        vertex(this.x + 30,this.y+20+this.mag)//c
        vertex(this.x + 35,this.y+15+this.mag)//d
        vertex(this.x + 40,this.y+10)//e
        endShape();
        circle(this.x-5, this.y, 10);
        circle(this.x-5, this.y + 20, 10);
        circle(this.x + 70, this.y + 10, 10);
        circle(this.x + 44, this.y + 10, 7);
    }
}
class XOR{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.mag = 5;
    }
    show() {
        line(this.x, this.y, this.x + 20, this.y);
        line(this.x, this.y + 20, this.x + 20, this.y + 20);
        line(this.x + 40, this.y + 10,this.x + 65, this.y + 10);
        beginShape();
        vertex(7+this.x + 40,this.y+10)//e
        vertex(7+this.x + 35,this.y+5 - this.mag)//d
        vertex(7+this.x + 30,this.y - this.mag)//c
        vertex(7+this.x + 20, this.y-5 - this.mag)//b3
        vertex(7+this.x + 15, this.y-5 - this.mag)//b
        vertex(7+this.x + 10, this.y-5 - this.mag)//b2
        vertex(7+this.x + 15, this.y - this.mag)//a
        vertex(7+this.x + 18,this.y+5 - this.mag)//center
        vertex(7+this.x + 20,this.y+10)//0
        vertex(7+this.x + 18,this.y+15+this.mag)//center
        vertex(7+this.x + 15, this.y + 20+this.mag)//a
        vertex(7+this.x + 10, this.y + 25+this.mag)//b2
        vertex(7+this.x + 15, this.y + 25+this.mag)//b
        vertex(7+this.x + 20, this.y + 25+this.mag)//b3
        vertex(7+this.x + 30,this.y+20+this.mag)//c
        vertex(7+this.x + 35,this.y+15+this.mag)//d
        vertex(7+this.x + 40,this.y+10)//e
        endShape();
        push();
        noFill()
        beginShape();
        vertex(2+this.x + 10, this.y-5 - this.mag)//b2
        vertex(2+this.x + 15, this.y - this.mag)//a
        vertex(2+this.x + 18,this.y+5 - this.mag)//center
        vertex(2+this.x + 20,this.y+10)//0
        vertex(2+this.x + 18,this.y+15+this.mag)//center
        vertex(2+this.x + 15, this.y + 20+this.mag)//a
        vertex(2+this.x + 10, this.y + 25+this.mag)//b2
        endShape();
        pop();
        circle(this.x-5, this.y, 10);
        circle(this.x-5, this.y + 20, 10);
        circle(this.x + 70, this.y + 10, 10);
    }
}
class XNOR{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.mag = 5;
    }
    show() {
        line(this.x, this.y, this.x + 20, this.y);
        line(this.x, this.y + 20, this.x + 20, this.y + 20);
        line(this.x + 40, this.y + 10,this.x + 65, this.y + 10);
        beginShape();
        vertex(7+this.x + 40,this.y+10)//e
        vertex(7+this.x + 35,this.y+5 - this.mag)//d
        vertex(7+this.x + 30,this.y - this.mag)//c
        vertex(7+this.x + 20, this.y-5 - this.mag)//b3
        vertex(7+this.x + 15, this.y-5 - this.mag)//b
        vertex(7+this.x + 10, this.y-5 - this.mag)//b2
        vertex(7+this.x + 15, this.y - this.mag)//a
        vertex(7+this.x + 18,this.y+5 - this.mag)//center
        vertex(7+this.x + 20,this.y+10)//0
        vertex(7+this.x + 18,this.y+15+this.mag)//center
        vertex(7+this.x + 15, this.y + 20+this.mag)//a
        vertex(7+this.x + 10, this.y + 25+this.mag)//b2
        vertex(7+this.x + 15, this.y + 25+this.mag)//b
        vertex(7+this.x + 20, this.y + 25+this.mag)//b3
        vertex(7+this.x + 30,this.y+20+this.mag)//c
        vertex(7+this.x + 35,this.y+15+this.mag)//d
        vertex(7+this.x + 40,this.y+10)//e
        endShape();
        push();
        noFill()
        beginShape();
        vertex(2+this.x + 10, this.y-5 - this.mag)//b2
        vertex(2+this.x + 15, this.y - this.mag)//a
        vertex(2+this.x + 18,this.y+5 - this.mag)//center
        vertex(2+this.x + 20,this.y+10)//0
        vertex(2+this.x + 18,this.y+15+this.mag)//center
        vertex(2+this.x + 15, this.y + 20+this.mag)//a
        vertex(2+this.x + 10, this.y + 25+this.mag)//b2
        endShape();
        pop();
        circle(this.x-5, this.y, 10);
        circle(this.x-5, this.y + 20, 10);
        circle(this.x + 70, this.y + 10, 10);
    }
}
/*
*/ 