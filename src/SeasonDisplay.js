import './SeasonDisplay.css';
import React from 'react';


const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun' 
    },
    winter: {
        text: "Burr, it\'s chilly",
        iconName: 'snowflake'
    }
};

// determine season based on the month and the latitude
const getSeason = (latitude, month) => {

    if(2 < month && month < 9){
        return 0 < latitude ? 'summer' : 'winter';
    } else {
        return latitude < 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    
    const {text, iconName } = seasonConfig[season] // {text, iconName}

    return ( 
        <div>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
}

export default SeasonDisplay;