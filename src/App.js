import './App.css'
import React, { useState, useEffect } from 'react'
import serverInterface from './modules/serverInterface'
import project from './models/project'
import myFace from './me.jpg'
import Feedback from './modules/feedback'
import CvDisplay from './modules/CvDisplay'
import ProjectsSchedule from './modules/ProjectsSchedule'
import LinksToOtherMedia from './modules/LinksToOtherMedia'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'


const App = () => {
    const [allProjects, setAllProjects] = useState(['loooadingg'])
    const [showDetails, setShowDetails] = useState([])
    
    const appStates = {allProjects:allProjects,setAllProjects:setAllProjects,
        showDetails:showDetails,setShowDetails:setShowDetails
    }

    useEffect(()=>{

        serverInterface.getAll({collectionModel:project}).then((value)=>{
            console.log(`got ${value}`)
            setAllProjects(value.data)
        }
        )
    },[])
  return (
      <Container>
    <div>
        <h2>
            Portfolio Aaro-Antero Kurki
        </h2>
    <div>
        <div>
            <LinksToOtherMedia appStates={appStates}/>
        </div>
        <ProjectsSchedule appStates = {appStates}/>
    </div>
    <h3>Curriculum Vitae</h3>
        <p>
            I am motivated 1st year student at TAMK, planning
            to become a solid professional in the field of programming.
        </p>
        <img src={myFace} alt="My face" height="150"/>
    <div>
        <CvDisplay appStates={appStates} />
    </div>
        <Feedback appStates={appStates}/>
    </div>
      </Container>
  )
}

export default App;
