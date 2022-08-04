import { Cell } from "../Cell";
import { Color } from "../Color";
import { Figure, FigureName } from "./Figure";
import whiteLogo from "./../../assets/white-bishop.png"
import blackLogo from "./../../assets/black-bishop.png"



export class Bishop extends Figure{
    constructor(color:Color,cell:Cell){
    super(color,cell)
        this.logo = color === Color.black ? blackLogo : whiteLogo
        this.name = FigureName.BISHOP



}
}