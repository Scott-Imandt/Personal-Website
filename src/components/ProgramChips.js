import React from 'react'
import './ProgramChip.css'

function ProgramChips({ Name, color}) {


    return (

        <div>
            <p className='programChip' style={{ borderColor: color }}>{Name}</p>
        </div>
    )
}

export default ProgramChips