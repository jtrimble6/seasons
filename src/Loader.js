import React from 'react'

const Loader = props => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.loadingMessage}
            </div>
        </div>
    )
}

Loader.defaultProps = {
    loadingMessage: 'Loading...'
}

export default Loader