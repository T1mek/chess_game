import { Cell } from "../Cell";
import { Color } from "../Color";
import logo from "./../../assets/black-king.png";

export enum FigureName {
  FIGURE = "Фигура",
  KING = "Король",
  KNIGHT = "Конь",
  PAWN = "Пешка",
  QUEEN = "Ферзь",
  ROOK = "Ладья",
  BISHOP = "СЛОН",
}

export class Figure {
  color: Color;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureName;
  id: number;

  constructor(color: Color, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureName.FIGURE;
    this.id = Math.random();
  }
  canMove(target: Cell): boolean {
    return true;
  }
  moveFigure(target:Cell){
    
  }
}
