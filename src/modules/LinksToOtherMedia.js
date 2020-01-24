import React from 'react'
import HiddenDetails from '../modules/hiddenDetails'
import cvInfo from "../information/cvInfo";

const Links = ({appStates}) => {
    return(
        <>
            <div>
                <HiddenDetails  info={cvInfo.github}/>
            </div>
            <div>
                <HiddenDetails  info={cvInfo.linkedIn}/>
            </div>
            <div>
                <HiddenDetails  info={cvInfo.portfolioInfo}/>
            </div>
        </>
    )
}

export default Links