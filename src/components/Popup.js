import React from 'react'

/**prop appearing when triggered (popup) */
function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close" onClick={() => props.setTrigger(false)}>X</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default Popup

