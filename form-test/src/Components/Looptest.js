import React from 'react'

export default function Looptest() {
    var a = 1
    if(a===1){
    return(<div>
        Data    
        {a=4}
    </div>)
    return(<div>
        Data3
        {a=4}
    </div>)
    }
    return (
        <div>
            Loop
            {/* <Looptest /> */}
        </div>
    )
}
