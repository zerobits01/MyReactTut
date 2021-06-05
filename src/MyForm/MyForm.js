import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: '' };
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
      alert("You are submitting " + this.state.username);
    }
    myChangeHandler = (event) => {
      this.setState({username: event.target.value});
    }
    render() {
      return (
            <div className="jumobotron d-flex justify-content-center">
                <form onSubmit={this.mySubmitHandler}>
                
                    <h1 className="jumobotron d-flex justify-content-center">
                        Hello {this.state.username}
                    </h1>
                    <p>Enter your name, and submit:</p>
                 
                    <input
                        type='text'
                        className="form-control"
                        onChange={this.myChangeHandler}
                    />
                 
                    <input
                       type='submit'
                       className="btn btn-primary"
                    />
                
                </form>
            </div>

        );
    }
  }

export default MyForm;