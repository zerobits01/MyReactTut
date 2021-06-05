import React from 'react';


class Parent extends React.Component {
    state = {message: "message"} 
    // this parent can share its own state to all childs this is a good way for data handling
    callbackFunction = (childdata) => {
        this.setState({message: childdata})
    }

    render() {
        return (
            <div>
                <Child1 parentCallback={this.callbackFunction} />
                <p>
                    message is: {this.state.message}
                </p>
            </div>
        );
    }
}

class Child1 extends React.Component {

    constructor(props){
        super(props)
        this.props.parentCallback("this is a data from construcor")
    }

    callParent = () => {
        this.props.parentCallback("new message")
    }

    render() {
        return(
            <div>
                <button
                    onClick={this.callParent}
                >
                    Click me to call parent data
                </button>
            </div>
        );
    }
}

export default Parent;