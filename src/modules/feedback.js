import React, {useState} from 'react'
import server from './serverInterface'


const Feedback = (props) => {
    const [newFeedback, setNewFeedback]= useState('')
    const [newName, setNewName] = useState('')
    console.log(props)
    const feedback = {feedback:newFeedback,
        name:newName
    }
    return(
        <div>
            <h2>Feedback</h2>
            <form >
            <div>
            <div>Input your name (optional)</div>
            <input type="text" onChange={(event)=>(setNewName(event.target.value))}></input>
            </div>
            <div>
            <div>Share your thoughts</div>
            <textarea rows="10" columns="50" onChange={(event)=>(setNewFeedback(event.target.value))}></textarea>
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