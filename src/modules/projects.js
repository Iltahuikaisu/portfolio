import React from 'react'

const ProjectsByState = (props) => {
    if (props.appStates.allProjects==='loading') {
        return(
            <div>loading</div>
        )
    } else {
    const projects = props.appStates.allProjects
    const filteredProjects = projects.map((value)=>{
        if(props.state === value.state) { // filters the 
            if(props.appStates.showDetails.find((shownDetails)=>{
                if(shownDetails === value.name) {
                    return(true)
                } else {
                    return(false)
                }
            })) {
                return(<div key={value.name}>
                    {value.details}
                    <button onClick={()=>{
                        props.appStates.setShowDetails(props.appStates.showDetails.filter((showValue)=>{
                            if(showValue ===value.name) {
                                return(false)
                            } else {
                                return(true)
                            }
                        }))
                    }}>less details</button>
                </div>)
            } else {
            return(<div key={value.name}>
                {value.name}
                <button onClick={()=>{
                        props.appStates.setShowDetails(props.appStates.showDetails.concat(value.name))
                    }}>more details</button>
            </div>)
            }

        } else {
            return(false)
        }
    })
    return(
    <>
    {filteredProjects}    
    </>
    )
    }
}

export default ProjectsByState
