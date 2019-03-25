import React from 'react';  
import ReactDOM from 'react-dom';

class App extends React.Component{
    
    constructor(props){
        super(props);   //calling the parent constructor
        //THIS IS THE ONLY TIME we do direct assignment to this.state
        this.state = {latitude: null, errorMessage: '' };    //initialize state object

    };
    
    //perform initial data loading
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude: position.coords.latitude}),
            (error)=> this.setState({errorMessage: error.message})
        );
    }

    /*
    componentDidUpdate(){
        console.log('My component was just updated - it rerendered!');
    }
    */

    //mandatory method
    render(){

        //if there is no latitude AND there is an error...
        if (!this.state.latitude && this.state.errorMessage){
            return <div>Error: {this.state.errorMessage}</div>
        }
        //if there is a latitude AND there is no error
        else if(this.state.latitude && !this.state.errorMessage){
            return <div>Latitude: {this.state.latitude}</div>
        }
        //if ther is no latitude AND there is no error...
        else if(!this.state.latitude && !this.state.errorMessage){
            return <div>Loading...</div>
        }

    }; 

}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);