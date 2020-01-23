import React, {useState} from 'react'

const HiddenDetails = (props) => {
    const name = props.info.name
    const details = props.info.details
    const [showDetails, setShowDetails] = useState(false)
    const toggleDetails = () => {
        setShowDetails(!showDetails)
    }
    if (showDetails) {
        return(
            <div>
                {details}
                <button onClick={toggleDetails}>less</button>
            </div>
        )
    } else {
        return(
            <div>
                {name}
                <button onClick={toggleDetails}>more</button>
            </div>
        )
    }

}

export default HiddenDetails