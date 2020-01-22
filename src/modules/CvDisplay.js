import HiddenDetails from "./hiddenDetails";
import cvInfo from "../information/cvInfo";
import React from 'react';
import Container from 'react-bootstrap/Container'

const DisplayCv = ({ appStates}) => {



    return(
        <>
            <Container>
                <HiddenDetails appStates={appStates} info={cvInfo.workExperience}/>
            </Container>
        <HiddenDetails appStates={appStates} info={cvInfo.languageSkills}/>
        <HiddenDetails appStates={appStates} info={cvInfo.hobbies}/>
        <HiddenDetails appStates={appStates} info={cvInfo.contactInformation}/>
        <HiddenDetails appStates={appStates} info={cvInfo.education}/>
        </>
        )
}

export default DisplayCv