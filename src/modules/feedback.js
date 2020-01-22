import React from 'react'
import server from './serverInterface'


const Feedback = (props) => {
    console.log(props)
    const feedback = {feedback:props.appStates.newFeedback,
        name:props.appStates.newName
    }
    return(
        <div>
            <h2>Feedback</h2>
            <form >
            <div>
            <div>Input your name (optional)</div>
            <input type="text" onChange={(event)=>(props.appStates.setNewName(event.target.value))}></input>
            </div>
            <div>
            <div>Share your thoughts</div>
            <textarea rows="10" columns="50" onChange={(event)=>(props.appStates.setNewFeedback(event.target.value))}></textarea>
            </div>
            <input type="submit" title="Submit" onClick={(event)=>{
                event.preventDefault()
                server.sendFeedback(feedback).then(()=>{window.alert(`Thank you for your feedback!`)})
                
            }}></input>

            </form>
        </div>
    )
}


export default Feedback