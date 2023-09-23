import React from "react";

// event
const Resource = (props) => {
    return (
        <td classname="Resource">
            <h5>{props.resource}</h5>
            <div className="ImageContainer">
                <img src={props.imageSrc} alt={props.altText} />
            </div>
        </td>
    )
}

export default Resource;