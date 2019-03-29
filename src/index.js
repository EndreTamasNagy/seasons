import React from 'react';  
import ReactDOM from 'react-dom';
import SeasonDisplay from'./SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    
    state = {latitude: null, errorMessage: ''};

    //perform initial data loading
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude: position.coords.latitude}),
            (error)=> this.setState({errorMessage: error.message})
        );
    }

    renderContent(){
        //Error
        if (!this.state.latitude && this.state.errorMessage){
            return <div>Error: {this.state.errorMessage}</div>
        }
        //OK
        else if(this.state.latitude && !this.state.errorMessage){
            return <SeasonDisplay latitude={this.state.latitude}/>
        }
        //Loading
        else if(!this.state.latitude && !this.state.errorMessage){
            return <div><Spinner message="Please accept location request"/></div>
        }
    }

    //mandatory method
    render(){
        return <div className="border red">{this.renderContent()}</div>
    }; 

}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);