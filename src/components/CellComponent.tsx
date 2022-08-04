import React, {FC} from 'react'
import { Cell } from '../models/Cell'



interface CellProps{
    cell:Cell
}

const CellComponent: FC <CellProps> = ({cell}) => {
  return (
    <div className={["cell", cell.Color].join(' ')} >


    {cell.figure}

    </div>
  )
}

export default CellComponent