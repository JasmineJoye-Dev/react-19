import React from 'react'

export default function Alert(props) {
    const Capitalize = (word) => {
        let lowerWord = word.toLowerCase();
        return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
    }
    return (


        <div style={{ height: "50px" }}>
            {
                props.AlertMsg &&
                <div className={`alert alert-${props.AlertMsg.type} alert-dismissible fade show`} role="alert">
                    <strong>{Capitalize(props.AlertMsg.type)}</strong>: {props.AlertMsg.msg}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }
        </div>

    )
}