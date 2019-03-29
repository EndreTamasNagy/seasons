import React from 'react';

//functional component
const Spinner = (props) => {
    return (
            <div className="ui active dimmer">
                <div className="ui text loader">{props.text}</div>
            </div>
    );
}

export default Spinner;