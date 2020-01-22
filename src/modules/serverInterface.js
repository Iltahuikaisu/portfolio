import axios from 'axios'
const serverUrl = '/'

const getAll = (props) => {
    
return(axios.get(`${serverUrl}projects`).then((value)=>{
    return(value)
}
    )
)
}


const sendFeedback = (props) => {
    const feedback = {
        name:props.name,
        feedback:props.feedback
    }
    return(
        axios.post(`${serverUrl}feedback`,feedback).then((value)=>{
            return(value)
        })
    )

}


export default {getAll, sendFeedback}