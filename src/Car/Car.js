import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
1- constructor
2- static getDerivedStateFromProps(props, state)
3- render
4- componentDidMount
*/

class Car extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            color: "red"
        }
        this.changeState = this.changeState.bind(this);
        // only on creation
    }

    // static getDerivedStateFromProps(props, state){
    //     state.color = props.color;
    // on load and chaning the state
    //     return state;
    // }

    // shouldComponentUpdate(){
    //     // only on chaning the state or props
    //     return false;
    // }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                color: "yellow"
            })
        }, 2000)
        // this will be run after loading the page not everu change state
    }


    changeState = () => {

        if (this.state.color == "blue") {
            this.setState({color: "red"});
        } else {
            this.setState({color: "blue"});
        }
    }

    inputChange = (event) => {
        console.log(event.target.value);
    }
// what i have learned is that we have to use the center classes with the div tag
// this way we can handle everything better

    render(){
        // when we are trying to pass style we have to pass it as an object
        return (
            <div> 
                <div className="d-flex justify-content-center" style={this.state}>
                    <h2>
                        I am a Car! My name is {this.props.name}<br/>
                        I am {this.state.color}
                    </h2>

                </div>                
                <br/>
                <div className="d-flex justify-content-center">
                    <button 
                        type="button" 
                        className="btn btn-primary" 
                        onClick={this.changeState}>
                        Click to change state
                    </button>
                </div>
                <div className="d-flex justify-content-center">
                    <input 
                        type="text" 
                        onChange={this.inputChange}
                        // (event) => {this.inputChange("additional arg", event);}
                    />
                </div>
            </div>
        );
    }

    // getSnapshotBeforeUpdate(prevProp, prevState){

    // }

    // componentDidUpdate() {

    // }
}



export default Car;


/**
 regular functions and arrow functions
 reg function => this refeers to the DOM 
    so if we need to access the function with this we have to bind it
 in arrow functions this refers to the component so we can use it normally


 */

