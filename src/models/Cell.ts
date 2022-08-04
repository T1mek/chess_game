import { Board } from "./Board";
import { Color } from "./Color"
import { Figure } from "./figures/Figure";

export class Cell {
    readonly x:number;
    readonly y:number;
    readonly Color:Color;
    figure:Figure| null;
    board:Board
    available:boolean
    id:number


    constructor(board:Board,x:number,y:number , color :Color, figure:Figure|null){
this.x=x;
this.y=y;
this.Color = color;
this.figure=figure;
this.board=board
this.available=false;
this.id=Math.random()

    }

}