import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import signUp from '../actions/signup';

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            email:'',
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }
    
    handleSubmit(event) {

        const user = {
            name: this.state.name,
            password: this.state.password,
            email: this.state.email
        };
        this.props.signUp(user);

    }

    render() {
    return (
    <div className="signuppage">
        <h1 style={{textAlign:'center', fontSize:'3vw'}}>Make an account</h1>
        <form name="signup">
            Username:<br></br>
            <input 
                type="text" 
                name="name" 
                value={this.state.value}
                onChange={this.handleChange}/>
            <br></br>Password:<br></br>
            <input 
                type="password" 
                name="password"
                value={this.state.value}
                onChange={this.handleChange}/>
            <br></br>E-mail<br></br>
            <input 
                type="text" 
                name="email"
                value={this.state.value}
                onChange={this.handleChange}/>
            <br></br>
            
            <button onClick={this.handleSubmit}>
                Submit
            </button>
            <input type="reset"/>
        </form>
        
    </div>
    );
  }
  
}

function store() {
    if(document.forms["signup"].elements["name"].value == "" || document.forms["signup"].elements["password"].value == ""){
        alert("You must enter a username and password.");
    }
    else{
        localStorage.setItem(String(document.forms["signup"].elements["name"].value), String(document.forms["signup"].elements["password"].value));
        alert("You have successfully made an account! Please proceed to the log in page.");
    }
}

function userInfo(props) {
    return (
        <div>
        <div className="name"> {props.name} </div>
        <div className="password"> {props.password} </div>
        <div className="email"> {props.email} </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        signUp: signUp
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);