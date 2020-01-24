import HiddenDetails from "./hiddenDetails";
import cvInfo from "../information/cvInfo";
import React from 'react';
import Container from 'react-bootstrap/Container'

const DisplayCv = ({ appStates}) => {



    return(
        <>
            <Container>
                <HiddenDetails info={cvInfo.workExperience}/>
            </Container>
            <Container>
                <HiddenDetails info={cvInfo.languageSkills}/>
            </Container>
            <Container>
                <HiddenDetails  info={cvInfo.hobbies}/>
            </Container>
            <Container>
                <HiddenDetails info={cvInfo.contactInformation}/>
            </Container>
            <Container>
                <HiddenDetails info={cvInfo.education}/>
            </Container>
        </>
        )
}

export default DisplayCv