import React from "react";

import './error.scss'

const Error = ({errorMessage = 'component error'}) => {
    return (
        <div className="error">
            {`Error: ${errorMessage}`}
        </div>
    )
}

export default Error;