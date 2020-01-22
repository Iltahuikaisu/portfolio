import HiddenDetails from "./hiddenDetails";
import cvInfo from "../information/cvInfo";
import React from 'react';

const DisplayCv = ({ appStates}) => {



    return(
        <>
        <HiddenDetails appStates={appStates} info={cvInfo.workExperience}/>
        <HiddenDetails appStates={appStates} info={cvInfo.languageSkills}/>
        <HiddenDetails appStates={appStates} info={cvInfo.hobbies}/>
        <HiddenDetails appStates={appStates} info={cvInfo.contactInformation}/>
        <HiddenDetails appStates={appStates} info={cvInfo.education}/>
        </>
        )
}

export default DisplayCv