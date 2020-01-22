import React from 'react'
import HiddenDetails from '../modules/hiddenDetails'
import cvInfo from "../information/cvInfo";

const Links = ({appStates}) => {
    return(
        <>
            <div>
                <HiddenDetails appStates={appStates} info={cvInfo.github}/>
            </div>
            <div>
                <HiddenDetails appStates={appStates} info={cvInfo.linkedIn}/>
            </div>
            <div>
                <HiddenDetails appStates={appStates} info={cvInfo.portfolioInfo}/>
            </div>
        </>
    )
}

export default Links