import React from "react"

function Result(props) {
    return (
        <div className="result">
            <h3>{props.title}</h3>
            <p>
                <span dangerouslySetInnerHTML={{__html: `${props.description} . . . `}}></span>
                <a href={`https://en.wikipedia.org/wiki/${props.title}`} target="_blank" rel="noopener noreferrer">Continue Reading</a>
            </p>
        </div>
    )
}

export default Result