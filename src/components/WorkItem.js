import React from 'react'

const WorkItem = (props) => {
    return (
        <div>
            
            <div className='Work-container'>
                <div className='Work-image'>
                    <img src={props.imgSrc} alt={props.imgAlt} />
                </div>               
                <h2>{props.title}</h2>
                <h3>{props.languages}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default WorkItem