import React from 'react';

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
    console.log(season);
    const text = season === 'winter' ? 'Burr, it\'s chilly' : 'Let\'s hit the beach!';

    return ( 
        <div>
            {text}
        </div>
    );
}

export default SeasonDisplay;