import React from 'react'

const hiddenDetails = (props) => {
    const name = props.info.name
    const details = props.info.details
    const showDetails = props.appStates.showDetails
    const setShowDetails = props.appStates.setShowDetails
    if(showDetails.find((value)=>{
        if(value===name) {
            return(true)
        } else {
            return(false)
        }
    })) {
        return(
        <>
        {details}
        <button onClick={()=>{
            setShowDetails(showDetails.filter((showValue)=>{
                if(showValue ===name) {
                    return(false)
                } else {
                    return(true)
                }
            }))
        }}>less details</button>
        </>
        )    
    } else {
        return(<>
            {name}
            <button onClick={()=>{
                    setShowDetails(showDetails.concat(name))
                }}>more details</button>
        </>)
    }

}

export default hiddenDetails