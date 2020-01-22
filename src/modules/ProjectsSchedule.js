import React from 'react'
import ProjectsByState from "../modules/projects"

const ProjectsSchedule = ({appStates}) => {
    return(
        <>
            <h3>Ready</h3>
            <ProjectsByState state='ready' appStates = {appStates}/>
            <h3>Ongoing</h3>
            <ProjectsByState state='ongoing' appStates = {appStates}/>
            <h3>Planned</h3>
            <ProjectsByState state='planned' appStates = {appStates}/>
        </>
)
}

export default ProjectsSchedule